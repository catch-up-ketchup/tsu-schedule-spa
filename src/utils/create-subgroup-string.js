const createSubgroupString = (subgroup) => {
  if (subgroup === '') {
    return '';
  }

  let result = '';
  const numbers = '1234567890';
  result = numbers.includes(subgroup) ? `${subgroup} подгруппа` : subgroup;

  return `(${result})`;
};

export default createSubgroupString;