import { elementHtml } from "./elements/html/ElementHtml.js";

function app() {
  const root = document.getElementById("root");

  const paragraph = elementHtml({
    typeElement: "p",
    className: "yull",
    textContent: "Hola Mundo",
  });

  root.appendChild(paragraph);
}

app();
