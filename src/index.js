import { elementHtml } from "./elements/ElementHtml.js";
import { buttonToggleTheme } from "./pageComponents/button-toggle-theme/button-toggle-theme.js";

function app() {
  const root = document.getElementById("root");

  const paragraph = elementHtml({
    typeElement: "p",
    className: "yull",
    textContent: "Hola Mundo",
  });
  console.log(paragraph.outerHTML);
  const newButton = buttonToggleTheme();
  root.appendChild(newButton);
}

app();
