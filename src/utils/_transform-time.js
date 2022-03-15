const transformTime = (timeStr) => {
  const temp = timeStr.split(':')
  const date = new Date();
  date.setHours(Number(temp[0]));
  date.setMinutes(Number(temp[1]))
  date.setSeconds(0);
  return date.valueOf();
}

export default transformTime;