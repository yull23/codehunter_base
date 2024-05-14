import { elementHtml } from "../../elements/ElementHtml.js";

function itemLink({ content, href }) {
  const anchor = elementHtml({
    typeElement: "a",
    textContent: content,
    classBootstrap:
      "link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover",
  });
  anchor.href = href;

  return anchor;
}
export { itemLink };
// export { itemLink };
