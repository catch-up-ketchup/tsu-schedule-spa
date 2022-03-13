import $ from 'jquery';

const toggleClass = (className, toggledClass) => {
  const element = $(`.${className}`);
  element.toggleClass(`${className}_${toggledClass}`);
};

export default toggleClass;