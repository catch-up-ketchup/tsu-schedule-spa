import React, { useMemo, useState } from 'react';
import { AiOutlineClockCircle, BsDoorClosed, FiUser } from "react-icons/all";

import { useInterval } from '../../hooks';
import { isCurrentTimeInInterval } from '../../utils';

import './daily-schedule-item.scss';


const DailyScheduleItem = (
  { subject, time: { start, end }, auditorium, teacher, type: { en, ru, subgroup }, today }
) => {

  const [isGoing, setIsGoing] = useState(false);

  useInterval(() => {
    setIsGoing(isCurrentTimeInInterval(start, end));
  }, 3000, true, today);

  const className = useMemo(() => {
    let defaultClassName = 'daily-schedule-item ';
    defaultClassName += `daily-schedule-item_${en} `;
    defaultClassName += isGoing ? 'daily-schedule-item_is-going' : '';
    return defaultClassName
  }, [en, isGoing]);

  return (
    <li className={className}>
      <div className="daily-schedule-item__top">
        <div className="daily-schedule-item__row">
          <div className="daily-schedule-item__subject">
            <h4>{subject}</h4>
          </div>
        </div>
      </div>
      <div className="daily-schedule-item__bottom">
        <div className="daily-schedule-item__row">
          <div className="daily-schedule-item__info">
            <div className="daily-schedule-item__time class-time">
              <AiOutlineClockCircle/>
              <span className="class-time__start">{start}</span>
              <span className="class-time__sep">-</span>
              <span className="class-time__end">{end}</span>
            </div>
            <div className="daily-schedule-item__auditorium">
              <BsDoorClosed/>
              <span>{auditorium}</span>
            </div>
          </div>
          <div className="daily-schedule-item__teacher">
            <FiUser/>
            <span>{teacher.length === 1 ? 'Точно неизвестно' : teacher}</span>
          </div>
        </div>
        <div className="daily-schedule-item__row">
        <span className="daily-schedule-item__type">
          {subgroup.length === 0 ? ru : `${ru}  ${subgroup}`}
        </span>
        </div>
      </div>
    </li>
  );
};

export default DailyScheduleItem;