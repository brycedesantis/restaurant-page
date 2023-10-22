function menuPage() {
    const main = document.querySelector('.main')
    const menu = document.createElement('div')
    menu.className = 'menu'

    menu.appendChild(
        createMenuItem('Breakfast','Old fashioned breakfast is boring. Like an omelette on the go this is the perfect start to your day!')
    )

    menu.appendChild(
        createMenuItem('Hawaiian','Rep team pineapple with our classic hawaiian pizza.')
    )

    menu.appendChild(
        createMenuItem('Loaded','Unlike Charmin less is not more. Stuffed with all our add on\'s this is the last pizza you\\ll ever need.')
    )

    menu.appendChild(
        createMenuItem('Pepperoni','Made with our homemade pepperoni that is sure to leave you wanting another slice!')
    )

    menu.appendChild(
        createMenuItem('Veggie','For all of our vegetarians this pizza is sure to hit the spot.')
    )
            
    menu.appendChild(
        createMenuItem('Nutella', 'A delicious dessert pizza that rounds out the Zaza\'s experience.')
    )
    
    main.appendChild(menu)
}

function createMenuItem(item, description) {
    const menuItem = document.createElement('div')
    menuItem.className = 'menu-item'

    const itemName = document.createElement('h3')
    itemName.textContent = `${item} pizza`

    const itemDesc = document.createElement('p')
    itemDesc.className = 'item-desc'
    itemDesc.textContent = description

    const itemImage = document.createElement('img')
    itemImage.className = 'menu-img'
    itemImage.src = `assets/${item.toLowerCase()}.jpg`
    itemImage.alt = `${item} pizza`

    menuItem.appendChild(itemImage)
    menuItem.appendChild(itemName)
    menuItem.appendChild(itemDesc)

    return menuItem
}

export default menuPage