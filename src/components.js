import mainPhoto from "./images/mainPhoto.jpeg";
import breakfastSalad from "./images/breakfastSalad.jpeg";
import chickenSalad from "./images/chickenSalad.jpeg";
import greenSalad from "./images/greenSalad.jpeg";
import salmonSalad from "./images/salmonSalad.jpeg";

export default function components() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");

  //home
  const home = document.createElement("div");
  home.setAttribute("id", "home");

  const div = document.createElement("div");
  div.classList.add("div");

  const photo = new Image();
  photo.classList.add("salad");
  photo.src = mainPhoto;

  const title = document.createElement("h2");
  title.innerHTML = "HEALTHY AND TASTY FOOD";

  const discribe = document.createElement("h4");
  discribe.classList.add("describe");
  discribe.innerHTML =
    "Order from out our latest salad menu, designed by our expert chefs.";

  div.appendChild(photo);
  div.appendChild(title);

  home.appendChild(div);
  home.appendChild(discribe);

  //menu

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  // first salad
  const breakfast = document.createElement("div");
  breakfast.classList.add("breakfast");

  const bSalad = new Image();
  bSalad.classList.add("bSaladPhoto");
  bSalad.src = breakfastSalad;

  const bSaladDescribe = document.createElement("h6");
  bSaladDescribe.classList.add("bSalad");
  bSaladDescribe.innerHTML =
    "You’ll feel so good after starting your day with this combo of protein, healthy fat and veggies.";

  const breakfastPrice = document.createElement("h5");
  breakfastPrice.classList.add("breakfastPrice");
  breakfastPrice.innerHTML = "6.50";

  breakfast.appendChild(bSalad);
  breakfast.appendChild(bSaladDescribe);
  breakfast.appendChild(breakfastPrice);

  // second salad
  const chicken = document.createElement("div");
  chicken.classList.add("chicken");

  const chSalad = new Image();
  chSalad.classList.add("chSalad");
  chSalad.src = chickenSalad;

  const chSaladDescribe = document.createElement("h6");
  chSaladDescribe.classList.add("chSalad");
  chSaladDescribe.innerHTML =
    "This colourful salad supplies lean protein and is packed with nutrients.";

  const chickenPrice = document.createElement("h5");
  chickenPrice.classList.add("chickenPrice");
  chickenPrice.innerHTML = "9.50";

  chicken.appendChild(chSalad);
  chicken.appendChild(chSaladDescribe);
  chicken.appendChild(chickenPrice);

  // third salad
  const green = document.createElement("div");
  green.classList.add("green");

  const gSalad = new Image();
  gSalad.classList.add("gSalad");
  gSalad.src = greenSalad;

  const gSaladDescribe = document.createElement("h6");
  gSaladDescribe.classList.add("gSalad");
  gSaladDescribe.innerHTML =
    "Enjoy this salad as a generous dinner or as a light lunch or supper.";

  const greenPrice = document.createElement("h5");
  greenPrice.classList.add("greenPrice");
  greenPrice.innerHTML = "8.00";

  green.appendChild(gSalad);
  green.appendChild(gSaladDescribe);
  green.appendChild(greenPrice);

  // fourth salad
  const salmon = document.createElement("div");
  salmon.classList.add("salmon");

  const sSalad = new Image();
  sSalad.classList.add("sSalad");
  sSalad.src = salmonSalad;

  const sSaladDescribe = document.createElement("h6");
  sSaladDescribe.classList.add("sSalad");
  sSaladDescribe.innerHTML =
    "This Salmon Salad is fresh, protein packed, and exactly what you want for lunch.";

  const salmonPrice = document.createElement("h5");
  salmonPrice.classList.add("salmonPrice");
  salmonPrice.innerHTML = "10.00";

  salmon.appendChild(sSalad);
  salmon.appendChild(sSaladDescribe);
  salmon.appendChild(salmonPrice);

  menu.appendChild(breakfast);
  menu.appendChild(chicken);
  menu.appendChild(green);
  menu.appendChild(salmon);

  //contact
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");

  const tel = document.createElement("h2");
  tel.classList.add("telephone");
  tel.innerHTML = "(480) 565-7878";

  const adress = document.createElement("h5");
  adress.classList.add("adress");
  adress.innerHTML = "4140 PARKER RD.ALLENTOWN, NEW MEXICO 56674";

  const workingHour = document.createElement("div");

  const weekdays = document.createElement("p");
  weekdays.classList.add("week");
  weekdays.innerHTML = "Thursday-Friday: 8am-7pm";

  const weekend = document.createElement("p");
  weekend.classList.add("weekend");
  weekend.innerHTML = "Saturday-Sunday: 8am-10pm";

  const dayOff = document.createElement("p");
  dayOff.classList.add("dayOff");
  dayOff.innerHTML = "Closed Monday";

  workingHour.appendChild(weekdays);
  workingHour.appendChild(weekend);
  workingHour.appendChild(dayOff);

  contact.appendChild(tel);
  contact.appendChild(adress);
  contact.appendChild(workingHour);

  // main
  main.appendChild(home);
  main.appendChild(menu);
  main.appendChild(contact);

  return main;
}

document.body.appendChild(components());
