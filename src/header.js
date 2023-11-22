import myLogo from "./images/logo.png";
import components from "./components";

export default function header() {
  const container = document.createElement("div");
  container.setAttribute("id", "content");

  const header = document.createElement("div");
  header.setAttribute("id", "header");

  //div with logo and navigation
  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");

  const img = new Image();
  img.src = myLogo;
  img.alt = "logo";

  logo.appendChild(img);

  const list = document.createElement("div");
  list.setAttribute("id", "list");

  //navigation
  const navList = document.createElement("ul");

  const liHome = document.createElement("li");
  const linkHome = document.createElement("a");
  linkHome.innerHTML = "Home";
  linkHome.href = "#home";
  liHome.appendChild(linkHome);

  const liMenu = document.createElement("li");
  const linkMenu = document.createElement("a");
  linkMenu.innerHTML = "Menu";
  linkMenu.href = "#menu";
  liMenu.appendChild(linkMenu);

  const liContact = document.createElement("li");
  const linkContact = document.createElement("a");
  linkContact.innerHTML = "Contact";
  linkContact.href = "#contact";
  liContact.appendChild(linkContact);

  navList.appendChild(liHome);
  navList.appendChild(liMenu);
  navList.appendChild(liContact);
  list.appendChild(navList);

  header.appendChild(logo);
  header.appendChild(navList);

  container.appendChild(header);
  container.appendChild(main);
  console.log(container);

  return container;
}
document.body.appendChild(header());
