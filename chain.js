const users = [{id:1, name:'abul', job:'jobless'}];

// console.log(users[0].job)

const data = {
    count: 5000,
    data: [
        {id:1, name:'babul', job: 'leader'},
        {id:2, name:'dabul', job: 'leader'},
    ]
};
const firstJob = data.data[1].job;
// console.log(firstJob)

const user = {
    id:5001,
    name: 'Thomas alba edison',
    address:{
        street: {
            first: '35/A KhilKhet Lane',
            second: 'Third Floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    },
};
const userFloor = user.address.stret?.second; //chain with ? symbol
console.log(userFloor)