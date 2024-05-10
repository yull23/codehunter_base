function prototypeHtml() {
  HTMLElement.prototype.cambiarTexto = function (nuevoTexto) {
    this.textContent = nuevoTexto;
  };
}
export { prototypeHtml };
