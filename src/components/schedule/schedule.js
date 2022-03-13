import React, { useCallback } from 'react';
import { FiAnchor } from "react-icons/all";
import { v4 } from "uuid";

import DailySchedule from "../daily-schedule";
import { getItemIdxWithTodayDate, scrollToNthChild } from '../../utils';

import './schedule.scss';


const Schedule = ({ schedule, group }) => {

  const handleClick = useCallback(() => {
    const idx = getItemIdxWithTodayDate(schedule);
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