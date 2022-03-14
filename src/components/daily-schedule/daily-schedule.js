import React from 'react';
import { v4 } from 'uuid';

import DailyScheduleItem from "../daily-schedule-item";
import { isCurrentTimeInInterval, isTodayDate } from '../../utils';

import './daily-schedule.scss';


const DailySchedule = ({ day: { dayOfWeek, date, weekType }, dailySchedule }) => {
  return (
    <li className="daily-schedule">
      <div className="daily-schedule__day">
        <span className="daily-schedule__day-of-week">{dayOfWeek}</span>
        <span className="daily-schedule__week-type">{weekType}</span>
        <h3 className="daily-schedule__date">{date}</h3>
      </div>
      <ul className="daily-schedule__list">
        {dailySchedule.map((item) => (
          <DailyScheduleItem
            {...item}
            isGoing={isTodayDate(date) && isCurrentTimeInInterval(item.time.start, item.time.end)}
            key={v4()}
          />
        ))}
      </ul>
    </li>
  );
};

export default DailySchedule;