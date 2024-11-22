const navBarSection = document.createElement('section')

document.body.append(navBarSection)
navBarSection.style.backgroundColor = 'black'
const navBarDiv = document.createElement('div')
navBarDiv.style.maxWidth ='80%'
navBarDiv.style.margin = ' 0 auto'
navBarDiv.append(navBarSection)








const boxElement = document.createElement('div')
const h3Element = document.createElement('h3')

document.body.append(boxElement)

boxElement.setAttribute('class', 'card')
boxElement.style.backgroundColor = 'green'
boxElement.style.width = "200px"
boxElement.style.height = "200px"
boxElement.style.border = "solid 2px red"
boxElement.style.borderRadius = "30px"

boxElement.append(h3Element)

h3Element.textContent = "Azmp202"
h3Element.style.display ='flex'
h3Element.style.justifyContent = "center"
h3Element.style.color = "white"


