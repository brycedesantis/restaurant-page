export default function createHeader() {
    const content = document.querySelector('#content')
    const header = document.createElement('header')
    const restName = document.createElement('h1')

    restName.textContent = `Zaza's za casa`

    header.appendChild(addLogo())
    header.appendChild(restName)
    header.appendChild(addNav())
    header.appendChild(addDescription())

    content.appendChild(header)
}

function addLogo() {
    const headerIcon = document.createElement('img')
    headerIcon.src = 'images/pizza-icon.png'
    headerIcon.style.width = '90px'

    return headerIcon
}

function addNav() {
    const nav = document.createElement('nav')

    const pages = [
        'Menu',
        'About',
        'Contact Us'
    ]

    pages.forEach((page) => {
        let pageLink = document.createElement('a')
        pageLink.textContent = `${page}`
        nav.appendChild(pageLink)
    })

    return nav
}

function addDescription() {
    const section = document.createElement('section')
    const article = document.createElement('article')
    const title = document.createElement('h3')
    const chef = document.createElement('img')
    const paragraph = document.createElement('p')

    title.textContent = `Welcome to "Mamma Mia Pizzeria" – Where Every Slice Tells a Delicious Tale!`
    chef.src = 'images/pizza-chef.jpg'
    chef.style.width = '200px'
    paragraph.textContent = `At Mamma Mia Pizzeria, we are dedicated to crafting the most exquisite, mouthwatering pizzas that transport your taste buds straight to Italy. Nestled in the heart of our charming, family-friendly neighborhood, our restaurant offers a warm and inviting atmosphere, reminiscent of an authentic Italian trattoria.`

    article.appendChild(title)
    article.appendChild(chef)
    article.appendChild(paragraph)

    section.appendChild(article)

    return section
}