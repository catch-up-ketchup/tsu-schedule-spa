import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash/lang";

import { getDifferenceWithCurrentTime, isToday } from "../utils";


export const setTimeoutsToUpdateCurrentClassIndex = () => {
  return (dispatch, getState) => {
    const dailySchedule = getState().schedule.schedule.find(item => isToday(item.day.date))?.dailySchedule;
    if (!dailySchedule) {
      return;
    }

    const remainingClasses = dailySchedule.filter(item => getDifferenceWithCurrentTime(item.time.end) > 0);

    const setCurrentClassUpdateTimeout = (item, time, action) => {
      const timeout = getDifferenceWithCurrentTime(time);
      const timeoutID = setTimeout(() => {
        const newIndex = dailySchedule.findIndex(dailyItem => isEqual(item, dailyItem));
        dispatch(action(newIndex));
      }, timeout);
      dispatch(addTimeoutID(timeoutID));
    };

    remainingClasses.forEach(item => {
      setCurrentClassUpdateTimeout(item, item.time.start, setNewIndex);
      setCurrentClassUpdateTimeout(item, item.time.end, setDefaultIndex);
    });
  };
};

export const resetCurrentClassStateAndTimeouts = () => {
  return (dispatch, getState) => {
    const { timeoutIDs } = getState().currentClass;
    timeoutIDs.forEach(timeoutID => clearTimeout(timeoutID));
    const actions = [setDefaultIndex, setDefaultTimeoutIDs];
    actions.forEach(action => dispatch(action()));
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
    setNewIndex: (state, action) => {
      state.index = action.payload;
    },

    addTimeoutID: (state, action) => {
      state.timeoutIDs.push(action.payload);
    },

    setDefaultIndex: (state) => {
      state.index = initialState.index;
    },

    setDefaultTimeoutIDs: (state) => {
      state.timeoutIDs = initialState.timeoutIDs;
    }
  }
});

export default currentClassSlice.reducer;
export const { setNewIndex, setDefaultIndex, addTimeoutID, setDefaultTimeoutIDs } = currentClassSlice.actions;
