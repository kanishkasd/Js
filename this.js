// Object that is executng the current funciton (this)


const video = {
    title : 'a',
    play(){
        console.log(this);
    },

    stop(){
        console.log(this);
    }
    
}

function playVideo(){
    console.log(this);
}

function Video(title){ // Pascal notation for constructor functions
    this.title = title;
    console.log(this);
}


video.stop()  // this keyword reference to object that is executing this method
playVideo(); // this keyword reference to global object (window in browser)

const v = new Video('b') // this keyword reference to new object that is created by new operator


// 2nd example

const video2 = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag); // this is a reference to the global object because its inside a regular function
        }, this) // we can pass this as a second argument to forEach method
    }
}

video2.showTags();
