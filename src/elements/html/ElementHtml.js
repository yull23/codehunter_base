const elementHtml = ({
  typeElement = "",
  id = "",
  className = "",
  classBootstrap = "_",
  textContent = "",
}) => {
  const p = document.createElement(typeElement);
  p.id = id;
  p.className = className;
  p.classList.add(classBootstrap);
  p.textContent = textContent;
  return p;
};

export { elementHtml };
