const pRed = document.createElement("p")

pRed.style.color = "red"
pRed.textContent = "Hey, I am red"

const h3Blue = document.createElement("h3")

h3Blue.style.color = "blue"
h3Blue.textContent = "Hey, I am a blue h3"

const div = document.createElement("div")

div.style.border = "1px solid black"
div.style.backgroundColor = "pink"

const h1 = document.createElement("h1")

h1.textContent = "I am in a div"

const p = document.createElement("p")

p.textContent = "ME TOO!"

document.body.appendChild(pRed)
document.body.appendChild(h3Blue)
document.body.appendChild(div)

div.appendChild(h1)
div.appendChild(p)