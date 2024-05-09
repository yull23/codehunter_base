import { elementHtml } from "../../elements/ElementHtml.js";

function itemLink({ content, baseUrl }) {
  const link = elementHtml({
    typeElement: "a",
    textContent: content,
  });
  link.href = baseUrl;
  return link;
}
export { itemLink };
