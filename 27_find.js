let product = [
    {id : 1, title:"T Shirt",price : 2000,color : "red"},
    {id : 2, title:"Fan",price : 4000,color : "white"},
    {id : 3, title:"Hat",price : 1000,color : "green"},
    {id : 4, title:"Pant",price : 6000,color : "blue"},
    {id : 5, title:"Mouse",price : 5000,color : "white"},
]

let result = product.find((product) => {
    return product.color == "white"
})

console.log(result)