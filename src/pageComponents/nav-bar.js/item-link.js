import { elementHtml } from "../../elements/ElementHtml.js";

function itemLink({ content, href }) {
  const anchor = elementHtml({
    typeElement: "a",
    textContent: content,
  });
  anchor.href = href;
  anchor.className = "item-list";

  return anchor;
}
export { itemLink };
