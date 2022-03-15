import transformTime from "./_transform-time";


const isCurrentTimeInInterval = (minTimeStr, maxTimeStr) => {
  // 15:15 - format
  const minTime = transformTime(minTimeStr);
  const maxTime = transformTime(maxTimeStr);
  const currentTime = (new Date()).getTime();
  return minTime <= currentTime && currentTime <= maxTime;
};

export default isCurrentTimeInInterval;