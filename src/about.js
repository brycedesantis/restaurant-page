import { titles } from './arrays/vamp-titles'
import { descriptions } from './arrays/vamp'

function homePage() {
    const home = document.createElement('div')
    const chef = document.createElement('img')
    const aboutSection = document.createElement('section')

    home.className = 'home-page'
    
    chef.src = 'assets/pizza-chef.jpg'
    chef.className = 'chef-img'

    aboutSection.className = 'about-section'
    
    for(let i = 0; i < titles.length; i++){
        let article = document.createElement('article')
        let titleElement = document.createElement('h3')
        let descriptionElement = document.createElement('p')
            
        titleElement.textContent = `${titles[i]}`
        titleElement.className = `title`
        descriptionElement.textContent = `${descriptions[i]}`
        descriptionElement.className = 'desc'
            
        article.appendChild(titleElement)
        article.appendChild(descriptionElement)
        
        aboutSection.appendChild(article)
    }
    
    home.append(chef)
    home.appendChild(aboutSection)

    return home
}

function renderHome() {
    const main = document.querySelector('.main')
    main.innerHTML = ''
    main.appendChild(homePage())
}

export default renderHome