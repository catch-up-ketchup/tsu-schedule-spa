import React from 'react';
import {useSelector } from "react-redux";
import { v4 } from 'uuid';

import DailyScheduleItem from "../daily-schedule-item";
import { isTodayDate } from "../../utils";

import './daily-schedule.scss';


const DailySchedule = ({ day: { dayOfWeek, date, weekType }, dailySchedule }) => {

  const { goingClassIndex } = useSelector(state => state.schedule);

  return (
    <li className="daily-schedule">
      <div className="daily-schedule__day">
        <div className="daily-schedule__day-container">
          <span className="daily-schedule__day-of-week">{dayOfWeek}</span>
          <span className="daily-schedule__week-type">{weekType}</span>
          <h3 className="daily-schedule__date">{date}</h3>
        </div>
      </div>
      <ul className="daily-schedule__list">
        {dailySchedule.map((item, idx) => (
          <DailyScheduleItem
            {...item}
            isGoing={idx === goingClassIndex && isTodayDate(date)}
            key={v4()}
          />
        ))}
      </ul>
    </li>
  );
};

export default DailySchedule;