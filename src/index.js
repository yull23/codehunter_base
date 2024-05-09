import { ElementHtml } from "./elements/html/element-html.js";

function app() {
  const root = document.getElementById("root");
  const paragraph = new ElementHtml({
    typeElement: "p",
    className: "yull",
    textContent: "Hola Mundo",
  });

  root.appendChild(paragraph.element);
}

app();
