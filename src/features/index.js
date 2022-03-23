import scheduleReducer, { fetchSchedule } from "./schedule-slice";
import currentClassReducer, {
  setTimeoutsToUpdateCurrentClassIndex,
  resetCurrentClassStateAndTimeouts
} from "./current-class-slice";

export {
  scheduleReducer,
  fetchSchedule,
  currentClassReducer,
  setTimeoutsToUpdateCurrentClassIndex,
  resetCurrentClassStateAndTimeouts
};