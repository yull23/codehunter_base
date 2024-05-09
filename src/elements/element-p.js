import { ElementHtml } from "./element-html.js";

class ElementP extends ElementHtml {
  constructor(id, className, classBootstrap, textContent) {
    super(id, className, classBootstrap);
    this.textContent = textContent || "";
    this.element = this.createElement(
      this.id,
      this.className,
      this.classBootstrap,
      this.textContent
    );
  }

  createElement(id, className, classBootstrap, textContent) {
    const p = document.createElement("p");
    p.id = id;
    p.className = className;
    p.classList.add(classBootstrap);
    p.textContent = textContent;
    return p;
  }
}

export { ElementP };
