
export default function initialize() {
  const content = document.getElementById("content");
  const header = document.createElement("h1");
  const menu = document.createElement("div");
  const butMain = document.createElement("button");
  const butMenu = document.createElement("button");
  const butContact = document.createElement("button");
  const view = document.createElement('div')
  butMain.textContent = 'Main'
  butMenu.textContent = 'Menu'
  butContact.textContent = 'Contact'
  butMain.id = 'main'
  butMenu.id = 'menu'
  butContact.id = 'contact'
  view.id = 'view'
  content.appendChild(header);
  content.appendChild(menu);
  content.appendChild(view)
  menu.appendChild(butMain);
  menu.appendChild(butMenu);
  menu.appendChild(butContact);

  header.textContent = "Restaurant";
}
