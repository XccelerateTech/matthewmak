class Person {
    constructor (obj) {
        this.age = obj.age;
        this.name = obj.name;
    }
    info(){
        console.log(`The person is called ${this.name} and is ${this.age} years old`)
    }
}

class Student extends Person {
    constructor (obj) {
        super (obj);
        this.gpa = obj.gpa;
    }
    info(){
        console.log(`The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`);
    }
}

const student = new Student( {age: 44, name: 'Tom' , gpa: '4.0'});
student.info() // The person is called Tom and is 44 years old