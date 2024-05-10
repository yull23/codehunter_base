import { elementHtml } from "./elements/ElementHtml.js";
import { buttonToggleTheme } from "./pageComponents/button-toggle-theme/button-toggle-theme.js";
import { navBarComponent } from "./pageComponents/nav-bar.js/nav-bar.js";
import { utils } from "./utils/index-utils.js";

function app() {
  const root = document.getElementById("root");
  utils();

  const paragraph = elementHtml({
    typeElement: "p",
    className: "yull",
    textContent: "Hola Mundo",
  });
  console.log(paragraph.outerHTML);
  const newButton = buttonToggleTheme();
  const newNavBar = navBarComponent();

  root.appendChild(newButton);
  root.appendChild(newNavBar);
}

app();
