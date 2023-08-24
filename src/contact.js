export default function contact() {
    const view = document.querySelector('#view')
    const menu = document.querySelector('#menu')
    const main = document.querySelector('#main')
    const contact = document.querySelector('#contact')
    menu.classList.remove('active')
    main.classList.remove('active')
    contact.classList.add('active')
    view.innerHTML = ''
    view.classList.remove('menu')
    const contactInfo = document.createElement('div')
    const phone = document.createElement('p')
    phone.textContent = '(888)-555-0150'
    view.appendChild(contactInfo)
    contactInfo.appendChild(phone)
    
}