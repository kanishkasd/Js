const array = [1, -2, 2, -4, 4, 5, -5];  // filter() method method will filter the given array according to given conditions

const filtered = array.filter(function(value) {
    return value >= 0; 
})

console.log(filtered)


// we can also use arrow function to this
const filtered2 = array.filter((value) =>  value >= 0)

console.log(filtered2)

