import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { scheduleService } from "../services";
import {
  isCurrentTimeInInterval,
  isTodayDate,
} from "../utils";


export const fetchSchedule = createAsyncThunk(
  'schedule/fetchSchedule',
  async (group, { rejectWithValue }) => {
    try {
      return await scheduleService.getSchedule(group);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateGoingClassIndex = createAsyncThunk(
  'schedule/updateGoingClassIndex',
  async (_, { getState, dispatch }) => {
    const dailySchedule = getState().schedule.schedule.find(item => isTodayDate(item.day.date)).dailySchedule;
    const goingClassIndex = dailySchedule.findIndex(item => isCurrentTimeInInterval(item.time.start, item.time.end))
    dispatch(setGoingClassIndex(goingClassIndex));
  }
)

const initialState = {
  schedule: [],
  group: localStorage.getItem('group'),
  goingClassIndex: null,
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,

  reducers: {
    setGoingClassIndex: (state, action) => {
      state.goingClassIndex = action.payload;
    }
  },

  extraReducers: {
    [fetchSchedule.pending]: (state) => {
      state.schedule = [];
      state.group = null;
      state.loading = true;
      state.error = null;
    },

    [fetchSchedule.fulfilled]: (state, action) => {
      const { schedule, group } = action.payload;

      state.schedule = schedule;
      state.group = group;
      state.loading = false;
      state.error = null;

      localStorage.setItem('group', group);
    },

    [fetchSchedule.rejected]: (state, action) => {
      state.schedule = [];
      state.group = null
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default scheduleSlice.reducer;
export const { setGoingClassIndex } = scheduleSlice.actions;
