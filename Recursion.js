// function that calls itself inside of its own definition
// its like having a dream inside of a dream

function dream(){
    dream()
}

// when you have recursive function that calls itself without anything to stop it 
// it will become infinite loop   infinite loops aren't very useful

function dream2(){
   if(!woke) {  // that why we got conditional logic  we call the BASE CASE
       dream2()
   }
}

// fibonacci with for loop


function fibonacci(targetIndex){
    const sequence = [0n, 1n];

    for(let i = 2; i <= targetIndex; ++i){
        const next = sequence[i - 2] + sequence[i - 1];
        sequence.push(next);
    }

    return sequence[targetIndex];
}

fibonacci(10);


// now if we do this with recursion 

function fibonacci1(targetIndex){
    if(targetIndex <= 1)  return  1

    return fibonacci1(targetIndex -1 ) +  fibonacci1(targetIndex - 2);
}

console.log(fibonacci1(20));











