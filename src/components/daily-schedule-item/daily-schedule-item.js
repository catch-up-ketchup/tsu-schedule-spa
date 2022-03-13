import React from 'react';
import { AiOutlineClockCircle, BsDoorClosed, FiUser } from "react-icons/all";

import './daily-schedule-item.scss';


const DailyScheduleItem = ({ subject, time, auditorium, teacher, type: { en, ru, subgroup } }) => {
  return (
    <li className={`daily-schedule-item daily-schedule-item_${en} daily-schedule-item_is-going`}>
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
           <div className="daily-schedule-item__time daily-schedule-item__time_is-going">
             <AiOutlineClockCircle/>
             <span>{time}</span>
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