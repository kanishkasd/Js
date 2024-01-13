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

video.stop()  // this keyword reference to object that is executing this method
