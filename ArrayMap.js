// map is a loop that create new array from existing array

const users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20},
    {name: "camperCat", age: 10}
]


// traditional for of loop
// we have to create new array and push into elements to it
// this is know as imperative programmming
const userArray = [];

for(let user of users){
    userArray.push(user.name)        
}

// console.log(userArray);

//------map------

// using map we use function to create new array using existing array and we can change it if we want 
// this is called declarative programming

const userNameArray = users.map((user) => user.name)
console.log(userNameArray)
