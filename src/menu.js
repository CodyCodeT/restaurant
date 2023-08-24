import pretzelImg from './pretzel.jpg'
import friedImg from './fried.jpg'
import balsamicImg from './chicken.jpg'
import stroganoffImg from './stroganoff.jpg'

export default function menu() {
  const view = document.querySelector("#view");
  const menu = document.querySelector('#menu')
  const main = document.querySelector('#main')
  const contact = document.querySelector('#contact')
  menu.classList.add('active')
  main.classList.remove('active')
  contact.classList.remove('active')
  view.innerHTML = "";
  view.classList.add('menu')
  let menuItems = [];
  const createItem = function (name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
    menuItems.push(this);
  };
  const pretzel = new createItem(
    "Pretzel",
    "A soft baked pretzel served fresh with cream cheese",
    pretzelImg
  );
  const friedChicken = new createItem(
    "Fried Chicken",
    "Chicken fried and served with mashed potatoes, comes with today's vegetable",
    friedImg
  );
  const balsamicChicken = new createItem(
    "Balsamic Chicken",
    "Balsamic Chicken made with fresh roma tomatoes, and homemade fettuccine with a garlic butter sauce",
    balsamicImg
  );
  const sausageStroganoff = new createItem(
    "Sausage Stroganoff",
    "Sausage, fresh mushrooms, egg noodles, and a hearty sauce served with a fresh roll",
    stroganoffImg
  );
  for (let i = 0; i < menuItems.length; i++) {
    const item = document.createElement("div");
    const name = document.createElement("h2");
    const img = document.createElement("img")
    const description = document.createElement("p");
    name.textContent = `${menuItems[i].name}`;
    description.textContent = `${menuItems[i].description}`;
    img.src = `${menuItems[i].img}`
    view.appendChild(item);
    item.appendChild(name);
    item.appendChild(img)
    item.appendChild(description);
    item.classList.add('item')
  }
}
