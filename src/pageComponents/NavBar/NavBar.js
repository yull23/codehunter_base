import { elementHtml } from "../../elements/ElementHtml.js";
import { itemLink } from "./ItemLink.js";
import { listLinks } from "./vars.js";

function navBarComponent() {
  const navBar = elementHtml({
    typeElement: "div",
    className: "nav-bar",
  });

  listLinks.forEach((e) => {
    const link = itemLink({
      content: e.textContent,
      href: e.href,
    });

    navBar.appendChild(link);
  });

  return navBar;
}
export { navBarComponent };
