import { elementHtml } from "../../elements/ElementHtml.js";
import { prototypeHtml } from "../../utils/proto/proto.js";

function itemLink({ content, href }) {
  prototypeHtml();

  const anchor = elementHtml({
    typeElement: "a",
    textContent: content,
  });

  anchor.href = href;
  anchor.style.cssText = "color: inherit; text-decoration: none;";

  // start Events
  anchor.addEventListener("mouseover", function () {
    this.style.cssText =
      "color: #007bff; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);text-decoration: none;font-weight:600;";
  });
  anchor.addEventListener("mouseout", function () {
    this.style.cssText = "color: inherit; text-decoration: none;";
  });
  anchor.addEventListener("focus", function () {
    this.style.cssText =
      "color: #007bff; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);text-decoration: none;font-weight:600;";
  });

  // end Events
  return anchor;
}
export { itemLink };
