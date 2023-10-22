import renderHome from "./about"
import renderMenu from "./menu"
import renderContact from "./contact"

function createHeader() {
    const header = document.createElement('header')
    const logo = document.createElement('div')
    const restName = document.createElement('h1')
    const headerIcon = document.createElement('img')

    logo.className = 'logo'

    headerIcon.src = 'assets/pizza-icon.png'
    headerIcon.className = 'header-img'

    restName.textContent = `Zaza's Za`
    
    logo.appendChild(headerIcon)
    logo.appendChild(restName)

    header.appendChild(logo)
    header.appendChild(addNav())
    
    return header
}

function addNav() {
    const main = document.querySelector('main')
    const nav = document.createElement('nav')

    const homeButton = document.createElement('button')
    homeButton.textContent = 'Home'
    homeButton.addEventListener('click', () => {
        renderHome();
    })

    const menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click', () => {
        renderMenu()
    })

    const contactButton = document.createElement('button')
    contactButton.textContent = 'Contact Us'
    contactButton.addEventListener('click', () => {
        renderContact()
    })

    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)

    return nav
}

function createMain() {
    let main = document.createElement('main')
    main.className = 'main'

    return main
}

function buildSite() {
    const content = document.querySelector('#content')

    content.appendChild(createHeader())
    content.appendChild(createMain())
    renderHome()
}

export default buildSite