export default function main () {
    const view = document.querySelector('#view')
    view.innerHTML = ''
    
    const content = document.querySelector('#content')
    view.textContent = 'We believe in perfection at restaurant, only the finest foods and ingredients for the finest customers'
    content.appendChild(view)
    
}