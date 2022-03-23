import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { scheduleService } from "../services";


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

const initialState = {
  schedule: [],
  group: localStorage.getItem('group'),
  loading: false,
  error: null
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
      state.group = null;
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default scheduleSlice.reducer;
