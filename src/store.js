import { configureStore } from "@reduxjs/toolkit";

import { scheduleReducer, currentClassReducer } from './features';


const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    currentClass: currentClassReducer
  }
});

export default store;