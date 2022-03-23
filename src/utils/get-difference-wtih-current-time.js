import transformTime from "./_transform-time";


const getDifferenceWithCurrentTime = (time) => {
  const transformedTime = transformTime(time);
  const today = new Date();
  return transformedTime - today.valueOf();
};

export default getDifferenceWithCurrentTime;