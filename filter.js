const numbers = [12, 5, 23, 45, 11, 18, 9, 61, 1, 55];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 == 0);
// console.log(even)
// console.log(tiny)
// console.log(bigNums)
const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'mobile', price: 80000},
    {id:3, name:'watch', price: 3500},
    {id:4, name:'tablet', price: 23000},
];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);
console.log(expensive)