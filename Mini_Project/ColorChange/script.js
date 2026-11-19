let redColor = document.querySelector(".red")
let greenColor = document.querySelector(".green")
let yellowColor = document.querySelector(".yellow")
let blueColor = document.querySelector(".blue")
let blackColor = document.querySelector(".black")

let smallBtn  = document.querySelector('.small_btn')
let mediumBtn  = document.querySelector('.medium_btn')
let largeBtn  = document.querySelector('.large_btn')

let pragraph  = document.querySelector('.pargraph')

redColor.addEventListener('click', () => {
    document.body.style.backgroundColor ="red"
})

greenColor.addEventListener('click', () => {
    document.body.style.backgroundColor ="green"
})

yellowColor.addEventListener('click', () => {
    document.body.style.backgroundColor ="yellow"
})

blackColor.addEventListener('click', () => {
    document.body.style.backgroundColor ="black"
})

blueColor.addEventListener('click', () => {
    document.body.style.backgroundColor ="blue"
})

smallBtn.addEventListener('click', () => {
    pragraph.style.fontSize = "10px"
})

mediumBtn.addEventListener('click', () => {
    pragraph.style.fontSize = "30px"
})

largeBtn.addEventListener('click', () => {
    pragraph.style.fontSize = "60px"
})


