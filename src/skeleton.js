import homePage from "./about"

function createHeader() {
    const header = document.createElement('header')
    const restName = document.createElement('h1')
    const headerIcon = document.createElement('img')
    headerIcon.src = 'assets/pizza-icon.png'
    headerIcon.style.width = '90px'

    restName.textContent = `Zaza's Za`

    header.appendChild(headerIcon)
    header.appendChild(restName)
    header.appendChild(addNav())
    
    return header
}

function addNav() {
    const main = document.querySelector('.main')
    const nav = document.createElement('nav')

    const homeButton = document.createElement('button')
    homeButton.textContent = 'Home'
    homeButton.addEventListener('click', (event) => {
        console.log('home page')
    })

    const menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click', () => {
        console.log('menu page')
    })

    const contactButton = document.createElement('button')
    contactButton.textContent = 'Contact Us'
    contactButton.addEventListener('click', () => {
        console.log('contact page')
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
    homePage()
}

export default buildSite