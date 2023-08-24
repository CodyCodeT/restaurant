import chef from './chef.jpg'

export default function main () {
    const menu = document.querySelector('#menu')
    const mainMenu = document.querySelector('#main')
    const contact = document.querySelector('#contact')
    menu.classList.remove('active')
    mainMenu.classList.add('active')
    contact.classList.remove('active')
    const view = document.querySelector('#view')
    view.innerHTML = ''
    view.classList.remove('menu')
    const chefImg = document.createElement('img')
    const main = document.createElement('p')
    const orderNow = document.createElement('p')

    
    const content = document.querySelector('#content')
    main.textContent = 'We believe in perfection at restaurant, only the finest foods and ingredients for the finest customers'
    orderNow.textContent = 'Order now or place a reservation today!!'

    chefImg.src = chef
    chefImg.id = 'chef'

    content.appendChild(view)
    view.appendChild(main)
    view.appendChild(chefImg)
    view.appendChild(orderNow)
}