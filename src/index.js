import { elementHtml } from "./elements/ElementHtml.js";

function app() {
  const root = document.getElementById("root");

  const paragraph = elementHtml({
    typeElement: "p",
    className: "yull",
    textContent: "Hola Mundo",
  });
  console.log(paragraph.outerHTML);

  root.appendChild(paragraph);
}

app();
