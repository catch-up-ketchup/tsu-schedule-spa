const scrollToNthChild = (className, index) => {
  const dailyScheduleItem = document.querySelector(`.${className}:nth-child(${index})`);
  try {
    dailyScheduleItem.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  } catch(err) {
     console.log('no classes today');
  }
};

export default scrollToNthChild;