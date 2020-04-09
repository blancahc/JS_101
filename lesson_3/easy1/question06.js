//We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

//MY SOLUTION
const allAges = Object.assign(ages, additionalAges);
console.log(allAges);

//SOLUTION
Object.assign(ages, additionalAges);