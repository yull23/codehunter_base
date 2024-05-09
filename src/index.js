import { ElementP } from "./elements/element-p.js";

function app() {
  const root = document.getElementById("root");
  // Crear un elemento <p> en el DOM
  const paragraph = document.createElement("p");

  // Configurar las propiedades del elemento <p> con los valores de data
  paragraph.className = "hola";
  paragraph.classList.add();
  paragraph.id = 223;
  paragraph.textContent = "Este es el contenido del párrafo."; // Puedes cambiar este texto por lo que desees
  console.log(paragraph.outerHTML);

  // Añadir el elemento <p> al elemento con id "root" en el DOM
  root.appendChild(paragraph);

  const paragraph2 = new ElementP(1, "xxx", "xxx", "Hola Mundo");
  console.log(paragraph2);
  console.log(paragraph2.element.outerHTML);
}

app();
