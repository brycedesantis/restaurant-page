function component() {
    const element = document.createElement('div')

    element.textContent = 'Hello World'

    return element
}

const content = document.querySelector('#content')

content.appendChild(component())