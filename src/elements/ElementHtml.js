const elementHtml = ({
  typeElement = "",
  id = "",
  className = "",
  classBootstrap = "_",
  textContent = "",
  styles = ``,
}) => {
  const p = document.createElement(typeElement);
  const classList = [className, classBootstrap];
  p.id = id;
  p.className = classList.join(" ");
  p.textContent = textContent;
  p.style.cssText = styles;
  return p;
};

export { elementHtml };
