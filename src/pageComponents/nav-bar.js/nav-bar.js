import { elementHtml } from "../../elements/ElementHtml.js";
import { listLinks } from "./00_var-nav-bar.js";
import { itemLink } from "./item-link.js";

function navBarComponent() {
  const navBar = elementHtml({
    typeElement: "div",
    classBootstrap: "d-flex justify-content-between align-items-center",
    styles: `
      border:1px solid red;
    `,
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
