// start with a list of items and iterate over them to produce a single value
// It works as basic arithmatics

const total = [10, 20, 30, 40, 50]

const add = (a,b) => a + b;

const result = total.reduce(add)
// console.log(result);  // uncomment this code to get output
//this is a loop but loop with a memory




const orders = [
    {id: '🍦' , total: 10},
    {id: '🥯' , total: 20},
    {id: '🍺' , total: 40},
]


// when we use for loop to problem we get this 

let totalV = 0;

for(const order of orders){
    totalV += order.total;
}

// for this we can use reduce method 

let totalOrder = orders.reduce( (acc , currV) => {  // accumilator is the previous value that stores in the memory  currV is the current one
    return acc + currV.total;
}, 0)  // default previous value (0)

console.log(totalOrder)



// We can also work from end of the array using 
// reduceRight()




