function contactPage(){
    const contactInfo = document.createElement('div')

    contactInfo.className = 'contact-div'

    const phoneNumber = document.createElement('h3')
    const address = document.createElement('h3')
    const interior = document.createElement('img')

    interior.className = 'interior-img'
    interior.src = 'assets/interior.jpg'

    phoneNumber.textContent = '(555) 328 \- 9292'
    address.textContent = '46290 Jibril Street, Philedelpia, Pennsylvania 19050'

    contactInfo.appendChild(phoneNumber)
    contactInfo.appendChild(address)
    contactInfo.appendChild(interior)

    return contactInfo
}

function renderContact() {
    const main = document.querySelector('.main')
    main.innerHTML = ''
    main.appendChild(contactPage())
}

export default renderContact