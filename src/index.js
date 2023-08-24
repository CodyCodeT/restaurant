import initialize from './initialize.js';
import main from './main.js'
import menu from './menu.js'
import contact from './contact.js'
import './style.css'

initialize();
main();

const butMain = document.querySelector('#main');
butMain.addEventListener('click', main)
const butMenu = document.querySelector('#menu')
butMenu.addEventListener('click', menu)
const butContact = document.querySelector('#contact')
butContact.addEventListener('click', contact)
