class ElementHtml {
  constructor({
    typeElement = "",
    id = "",
    className = "",
    classBootstrap = "_",
    textContent = "",
  }) {
    this.id = id;
    this.className = className;
    this.classBootstrap = classBootstrap;
    this.typeElement = typeElement;
    this.element = this.createElement(
      typeElement,
      id,
      className,
      classBootstrap,
      textContent
    );
  }
  createElement(typeElement, id, className, classBootstrap, textContent) {
    const p = document.createElement(typeElement);
    p.id = id;
    p.className = className;
    p.classList.add(classBootstrap);
    p.textContent = textContent;
    return p;
  }
}
export { ElementHtml };
