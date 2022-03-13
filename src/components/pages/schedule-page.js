import React from 'react';

import SearchForm from "../search-form";
import { ScheduleContainer } from "../containers";


const SchedulePage = () => {
  return (
    <div className="schedule-page">
      <SearchForm/>
      <ScheduleContainer/>
    </div>
  );
};

export default SchedulePage;

