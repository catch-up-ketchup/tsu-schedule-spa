import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash/lang";
import * as workerTimers from 'worker-timers';

import { getDifferenceWithCurrentTime, isToday } from "../utils";

// comment
export const setTimeoutsToUpdateCurrentClassIndex = () => {
  return (dispatch, getState) => {
    const dailySchedule = getState().schedule.schedule.find(item => isToday(item.day.date))?.dailySchedule;
    if (!dailySchedule) {
      return;
    }

    const remainingClasses = dailySchedule.filter(item => getDifferenceWithCurrentTime(item.time.end) > 0);

    const setCurrentClassUpdateTimeout = (item, time, action) => {
      const timeout = getDifferenceWithCurrentTime(time);
      const timeoutID = workerTimers.setTimeout(() => {
        const newIndex = dailySchedule.findIndex(dailyItem => isEqual(item, dailyItem));
        dispatch(action(newIndex));
      }, timeout);
      dispatch(addTimeoutID(timeoutID));
    };

    remainingClasses.forEach(item => {
      setCurrentClassUpdateTimeout(item, item.time.start, setIndex);
      setCurrentClassUpdateTimeout(item, item.time.end, () => setIndex(-1));
    });
  };
};

export const resetCurrentClassStateAndTimeouts = () => {
  return (dispatch, getState) => {
    const { timeoutIDs } = getState().currentClass;
    timeoutIDs.forEach(timeoutID => workerTimers.clearTimeout(timeoutID));
    dispatch(resetState());
  };
};

const initialState = {
  index: -1,
  timeoutIDs: []
};

const currentClassSlice = createSlice({
  name: 'currentClass',
  initialState,

  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
      state.timeoutIDs.shift();
    },

    addTimeoutID: (state, action) => {
      state.timeoutIDs.push(action.payload);
    },

    resetState: () => initialState
  }
});

const { setIndex, addTimeoutID, resetState } = currentClassSlice.actions;

export default currentClassSlice.reducer;
