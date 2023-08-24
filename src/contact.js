export default function contact() {
    const view = document.querySelector('#view')
    const menu = document.querySelector('#menu')
    const main = document.querySelector('#main')
    const contact = document.querySelector('#contact')
    const map = document.createElement('iframe')
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1346.1008509227704!2d-97.74182053347141!3d30.26586697659152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a7f5f2bdb9%3A0xb849d21c1a01278d!2sParking%20Spot!5e0!3m2!1sen!2sus!4v1692895412878!5m2!1sen!2sus" 
    map.height = '450'
    map.width = '600'
    map.style = 'border:0;'
    
    menu.classList.remove('active')
    main.classList.remove('active')
    contact.classList.add('active')
    view.innerHTML = ''
    view.classList.remove('menu')
    const contactInfo = document.createElement('div')
    const phone = document.createElement('p')
    phone.textContent = '(888)-555-0150'
    view.appendChild(contactInfo)
    view.appendChild(map)
    contactInfo.appendChild(phone)
    
}