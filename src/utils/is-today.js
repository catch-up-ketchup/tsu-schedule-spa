const isToday = (stringDate) => {
  const today = new Date();

  const temp = stringDate.split('.').map(item => Number(item));
  const date = new Date(2000 + temp[2], temp[1] - 1, temp[0])

  return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();
};

export default isToday;