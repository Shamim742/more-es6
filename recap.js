/**
 * var let const 
 * default parameters
 */
const numbers = [12, 46, 45, 89];
let salary = 450;
salary = 455;

// default parameter
function calculateSalary(salary, tax, bonus) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
// template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`
// arrow function
const doubleIt = x => x * 2;

const calculateSalary1 = (salary, tax, bonus) => salary -salary * tax + bonus;

// spread out
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages,22, 24, 23];

// destructuring
const {x,y,z,...c} = {x:45, y:12, z: 33, name: 'sakib al hasan', salary: 140000};

const [a, b,...r] = [12, 45, 21, 65, 98];