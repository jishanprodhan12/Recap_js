class Teacher {
    constructor(name, subject, address) {
        this.name = name;
        this.subject = subject;
        this.address = address;
    }
    lecture() {
        console.log(`${this.name} sir is teaching ${this.subject} `);
    }
    introuduction() {
        console.log(`name : ${this.name} 
                      subject : ${this.subject}
                      address : ${this.address}`)
    }
}

const sourob = new Teacher('Sourob','AI','Easturn University');
const miraj = new Teacher('Miraj','Java','American Internation University');
const sarmin = new Teacher('Polok','Math','City University');

console.table(sourob)
console.table(miraj)
console.table(sarmin)
sourob.lecture()
miraj.lecture()
sarmin.lecture()