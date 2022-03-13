import { isEqual } from "lodash";

const getDateObj = (date) => {
  const temp = date.split('.').map(item => Number(item));
  return {
    day: temp[0],
    month: temp[1],
    year: 2000 + temp[2]
  };
};

const getItemIdxWithTodayDate = (array) => {
  const today = new Date();
  let index;

  for (let i = 0; i < array.length; i++) {
    const date = new Date(today.getTime() + (24 * 60 * 60 * 1000) * i);

    const dateObj = {
      day: date.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    index = array.findIndex(item => {
      const itemDate = getDateObj(item.day.date);
      return isEqual(dateObj, itemDate);
    });

    if (index !== -1) {
      return index;
    }
  }

  return index;
};

export default getItemIdxWithTodayDate;