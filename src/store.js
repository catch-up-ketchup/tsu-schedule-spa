import { configureStore } from "@reduxjs/toolkit";

import { scheduleReducer } from './features';


const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  }
});

export default store;