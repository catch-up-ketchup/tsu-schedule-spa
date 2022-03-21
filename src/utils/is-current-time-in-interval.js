const transformTime = (timeStr) => {
  const temp = timeStr.split(':')
  const date = new Date();
  date.setHours(Number(temp[0]));
  date.setMinutes(Number(temp[1]))
  date.setSeconds(0);
  return date.valueOf();
}

const isCurrentTimeInInterval = (minTimeStr, maxTimeStr) => {
  // 15:15 - format
  const minTime = transformTime(minTimeStr);
  const maxTime = transformTime(maxTimeStr);
  const currentTime = (new Date()).getTime();
  return minTime <= currentTime && currentTime <= maxTime;
};

export default isCurrentTimeInInterval;