class Animal{
     food = true ;
    constructor(name , type,isPet){
            this.name = name;
            this.type = type;
            this.isPet = isPet;
    }
    walk(){
        const walking = `
            ${this.name} is walking 
        `
        console.log(walking);
    }
   eat(){
    const eat = `${this.name } is eating ${this.food}`
    console.log(eat)
   }
}
class Dog extends Animal {
    constructor(name) {
        super(name); // MUST call super first
        this.name = name;
    }
    running() {
        console.log(this.name, "is running");
    }
}