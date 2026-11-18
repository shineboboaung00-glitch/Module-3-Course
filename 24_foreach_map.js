// prices = [10,20,49,3,5,6,3]
// discountPrices = []

// // prices.forEach ((price, i, arr) => {
// //     arr[i] = price * 0.5
// // })

// console.log(prices)

// prices.forEach ((price) => {
//     discountPrices.push(price * 0.5)
// })

// console.log(discountPrices)


prices = [10, 20, 49, 3, 5, 6, 3]
discountPrices = prices.map((price) => {
    return price * 0.5
})

console.log(prices)
console.log(discountPrices)
