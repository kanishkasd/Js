const person = {
    firstName: 'kanishka',
    lastName: 'dissanayaka',

    get fullName(){   // we don't need to call this method as a function inside the object
        return `${person.firstName} ${person.lastName} `
    },  // this is the getter method

    set fullName(value){  // this is the setter method
        const parts = value.split(' ') ;
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
person.fullName = "john smith"
console.log(person.fullName)
