import React, { useCallback, useEffect } from 'react';
import { FiAnchor } from "react-icons/all";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import DailySchedule from "../daily-schedule";
import { scrollToNthChild, getNearestStudyDayIdx } from '../../utils';
import { setTimeoutsToUpdateCurrentClassIndex, resetCurrentClassStateAndTimeouts } from "../../features";

import './schedule.scss';


const Schedule = ({ schedule, group }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTimeoutsToUpdateCurrentClassIndex());
    return () => dispatch(resetCurrentClassStateAndTimeouts());
  }, [dispatch]);

  const handleClick = useCallback(() => {
    const idx = getNearestStudyDayIdx(schedule);
    scrollToNthChild('daily-schedule', idx + 1);
  }, [schedule]);

  return (
    <div className="schedule">
      <div className="container">
        <h2 className="schedule__title">Расписание группы {group}</h2>
        <ul className="schedule__list">
          {schedule.map(dailySchedule => <DailySchedule {...dailySchedule} key={v4()}/>)}
        </ul>
        <button className="schedule__button blue-button" onClick={handleClick}>
          <FiAnchor/>
        </button>
      </div>
    </div>
  );
};

export default Schedule;