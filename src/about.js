import { titles } from './arrays/vamp-titles'
import { descriptions } from './arrays/vamp'

function homePage() {
    const main = document.querySelector('.main')
    const chef = document.createElement('img')
    const aboutSection = document.createElement('section')
    
    chef.src = 'assets/pizza-chef.jpg'
    chef.style.width = '150px'

    for(let i = 0; i < titles.length; i++){
        let article = document.createElement('article')
        let titleElement = document.createElement('h3')
        let descriptionElement = document.createElement('p')
            
        titleElement.textContent = `${titles[i]}`
        descriptionElement.textContent = `${descriptions[i]}`
            
        article.appendChild(titleElement)
        article.appendChild(descriptionElement)
        
        aboutSection.appendChild(article)
    }
    
    main.append(chef)
    main.appendChild(aboutSection)
}

export default homePage