function app() {
  const root = document.getElementById("root");
  // Crear un elemento <p> en el DOM
  const paragraph = document.createElement("p");

  // Configurar las propiedades del elemento <p> con los valores de data
  paragraph.className = "hola";
  paragraph.classList.add();
  paragraph.id = 223;
  paragraph.textContent = "Este es el contenido del párrafo."; // Puedes cambiar este texto por lo que desees

  // Añadir el elemento <p> al elemento con id "root" en el DOM
  root.appendChild(paragraph);
}

app();
