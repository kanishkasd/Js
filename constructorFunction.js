// Job is a constructor function to create an object
// We use Pascal notation for factory functions (OneTwo)

// Factory function 
function createCircle(radius, location){
    return{
        radius,  // radius: radius
        location,
        draw(){ // we drop the function keyword when adding a method to an object
            console.log('draw');
        }
    }
}

// Constructor function

function Circle(radius){
    this.radius = radius; // set the radius property of this object to the radius argument
    this.draw = function(){ // this is a method of the object
        console.log('draw');
    }
}

const circle = new Circle(1); // new operator creates an empty object, like const x = {} and then sets this to point to that object
