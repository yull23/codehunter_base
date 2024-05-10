import { elementHtml } from "../../elements/ElementHtml.js";
import { listLinks } from "./00_var-nav-bar.js";
import { itemLink } from "./item-link.js";

function navBarComponent() {
  const navBar = elementHtml({
    typeElement: "div",
    className: "nav-bar",
    classBootstrap:
      "d-flex justify-content-between align-items-center bg-dark bg-gradient",
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

  navBar.setAttribute("data-bs-theme", "light");
  navBar.style.cssText = "color: var(--bs-body-color);";

  return navBar;
}
export { navBarComponent };
