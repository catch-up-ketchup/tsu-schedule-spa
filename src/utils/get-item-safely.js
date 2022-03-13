const getItemSafely = (array, idx) => {
  const { length } = array;
  return idx > length - 1 ? array[idx % length] : array[idx];
};

export default getItemSafely;