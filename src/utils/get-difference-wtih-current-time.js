import transformTime from "./_transform-time";


const getDifferenceWithCurrentTime = (time) => {
  const transformedTime = transformTime(time);
  const today = new Date();
  return today.valueOf() - transformedTime;
};

export default getDifferenceWithCurrentTime;