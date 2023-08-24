export default function menu() {
  const view = document.querySelector("#view");
  view.innerHTML = "";
  let menuItems = [];
  const createItem = function (name, description) {
    this.name = name;
    this.description = description;
    menuItems.push(this);
  };
  const pretzel = new createItem(
    "Pretzel",
    "A soft baked pretzel served fresh with cream cheese"
  );
  const friedChicken = new createItem(
    "Fried Chicken",
    "Chicken fried and served with mashed potatoes and country gravy, comes with today's vegetable"
  );
  const balsalmicChicken = new createItem(
    "Balsalmic Chicken",
    "Balsalmic Chicken made with fresh roma tomatoes, and homemade fettuccine with a garlic butter sauce"
  );
  const sausageStroganoff = new createItem(
    "Sausage Stroganoff",
    "Sausage, fresh mushrooms, egg noodles, and a hearty sauce served with a fresh roll"
  );
  for (let i = 0; i < menuItems.length; i++) {
    const item = document.createElement("div");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    name.textContent = `${menuItems[i].name}`;
    description.textContent = `${menuItems[i].description}`;
    view.appendChild(item);
    item.appendChild(name);
    item.appendChild(description);
  }
}
