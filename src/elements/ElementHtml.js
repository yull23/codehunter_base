const elementHtml = ({
  typeElement = "",
  id = "",
  className = "",
  classBootstrap = "_",
  textContent = "",
  styles = ``,
  href,
}) => {
  const element = document.createElement(typeElement);
  const classList = [className, classBootstrap];
  element.id = id;
  element.className = classList.join(" ");
  element.textContent = textContent;
  element.style.cssText = styles;
  if (href) {
    element.href = href;
  }
  return element;
};

export { elementHtml };
