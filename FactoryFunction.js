const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 3,
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
    
}


// Factory Function

function createCircle(radius, location){
    return{
        radius,  // radius: radius
        location,
        draw(){ // we drop the function keyword when adding a method to an object
            console.log('draw');
        }
    }
}


const circle = createCircle(1, 10);
console.log(circle)

// now we can create a new circle by calling the function
const circle2 = createCircle(2, 20);
console.log(circle2)
