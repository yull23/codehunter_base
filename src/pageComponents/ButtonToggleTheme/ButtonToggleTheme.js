import { elementHtml } from "../../elements/ElementHtml.js";

function buttonToggleTheme() {
  return elementHtml({
    typeElement: "span",
    textContent: "Button",
  });
}
export { buttonToggleTheme };
