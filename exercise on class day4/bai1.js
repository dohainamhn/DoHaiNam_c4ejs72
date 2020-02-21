// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
//     };
//     for (let x in product) {
//     console.log(x)
//     }
// 1.1 What does x receives from product, property or value?
//     - x nhận được từ object product là các key của nó : name, price,brand,color.
// 1.2 Use the for loop to print/log out the following output 
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
    let clone = []
    for (let x in product) {
    console.log(x,':',product[x])
    }
