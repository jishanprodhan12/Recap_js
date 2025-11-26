class Vehicle {
    constructor(name , price ,seat,wheels){
        this.name = name;
        this.price = price;
        this.seat = seat ;
        this.wheels = wheels;
    }
    move(){
        console.log(`${this.name} is moving like gari cole nah cole nah cole nah re `)
    }
    speedUp(){
        console.log(`${this.name} is speen up +++`);
    }
    information(){
        const info = `
        Vehical type is ${this.name}  having  ${this.seat} Seats
        and  ${this.wheels}
        Price is ${this.price}
        `
        console.log(info);
    }
}

class Bus extends Vehicle{
    constructor(name , price , seat,wheels,route,ticket){
        super(name,price,seat,wheels);
        this.route = route;
        this.ticket =ticket;
    }
    serviceOn(){
       console.log(`
        ${this.name} is service On ${this.route} and Ticket Price is ${this.ticket}
        `)
    }
}

class Truck extends Vehicle{
    constructor(name,price,seat,wheels,load){
        super(name,price,seat,wheels);
        this.load = load ;
    }
    carry(){
        console.log(`${this.name} can be avail to carry ${this.load} ton`);
    }
}
const Orin =new Bus('Orin Travels',120500,36,6,'Gaibandha to Dhaka',700)
const Al_Hamra =new Bus('Al Hamra',11500,36,6,'Gaibandha to Rongpur',750)
const SR_Travels =new Bus('SR Travels',14050,36,6,'Gaibandha to Dhaka',780)
// console.log(Orin,Al_Hamra,SR_Travels)
console.table(Orin);
console.table(Al_Hamra);
console.table(SR_Travels);