import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Schedule from '../schedule';
import LoadingSpinner from "../loading-spinner";
import ErrorMessage from "../error-message";
import { fetchSchedule } from "../../features";


const ScheduleContainer = () => {

  const { loading, error, schedule, group } = useSelector(state => state.schedule);
  const dispatch = useDispatch();

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (error) {
    return <ErrorMessage/>;
  }

  if (group && schedule.length === 0) {
    dispatch(fetchSchedule(group));
  }

  if (schedule.length > 0) {
    return <Schedule schedule={schedule} group={group}/>;
  }

  return null;
};

export default ScheduleContainer;