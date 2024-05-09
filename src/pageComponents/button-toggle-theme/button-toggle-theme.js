import { elementHtml } from "../../elements/ElementHtml.js";

function buttonToggleTheme() {
  return elementHtml({
    typeElement: "div",
    textContent: "Hola Mundo",
  });
}
export { buttonToggleTheme };
