const numbers = [12, 56, 88, 34];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(n => n / 3);
// console.log(thirds)
// console.log(half)

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
friends.forEach(friend => console.log(friend));

const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters)

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths)

const products = [
    {id:1, name:'laptop', price: 45000},
    {id:2, name:'mobile', price: 80000},
    {id:3, name:'watch', price: 3500},
    {id:4, name:'tablet', price: 23000},
];

products.forEach(product => console.log(product));
// const items = products.map(product => console.log(product.name))
const items = products.map(product => product.name);
// console.log(items)
const prices = products.map(p => p.price)
// console.log(prices)