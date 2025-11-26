class Animal {
    constructor(pet) {
        this.pet = pet;
    }
    sleep() {
        console.log(this.pet, "is sleeping");
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

const dog = new Dog("Tommy");
dog.sleep();
dog.running();
