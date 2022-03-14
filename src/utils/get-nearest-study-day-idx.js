const transformDate = (stringDate) => {
  const temp = stringDate.split('.').map(item => Number(item));
  const date = new Date(2000 + temp[2], temp[1] - 1, temp[0], 23, 59, 59);
  return date.valueOf();
}

const getNearestStudyDayIdx = (array) => {
  const today = (new Date()).valueOf();
  const nextDays = array.filter(item => {
    return transformDate(item.day.date) >= today
  });
  return array.indexOf(nextDays[0]);
}

export default getNearestStudyDayIdx;