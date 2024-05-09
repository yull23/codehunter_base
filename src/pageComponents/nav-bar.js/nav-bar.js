import { elementHtml } from "../../elements/ElementHtml.js";

function navBarComponent() {
  const navBar = elementHtml({
    typeElement: "div",
    classBootstrap: "d-flex",
    styles: `
      display:flex;
      flex-direction:column;
      width: 32rem;
      border:1px solid red;
    `,
  });
  navBar.appendChild(
    elementHtml({
      typeElement: "a",
      textContent: "Hola Mundoooooooo",
      href: "https://www.youtube.com/",
    })
  );

  return navBar;
}
export { navBarComponent };
