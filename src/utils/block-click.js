import $ from "jquery";

const blockClick = (className, timeout) => {
  const element = $(`.${className}`);
  element.bind('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
  setTimeout(() => element.unbind('click'), timeout);
};

export default blockClick;