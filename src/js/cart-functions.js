const calculateChange = (total, payment) => {
    return payment - total
}
exports.calculateChange=calculateChange

const isSufficientPayment = (total, payment) => {
if (payment >= total){
    return true
} else {
    return false
}
}
exports.isSufficientPayment=isSufficientPayment

const calculateTotal = (itemsArray) => {
    let priceTotal = 0
    itemsArray.map((item)=>{
        priceTotal += item.price 
    })
    return priceTotal
}
exports.calculateTotal = calculateTotal

const addItem = (itemsArray, name, price) => {
    itemsArray.push({name:name, price:price})
}
exports.addItem = addItem

const removeItem = (itemsArray, index) => {
    itemsArray.splice(index, 1)
}
exports.removeItem = removeItem