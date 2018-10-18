class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get Age(){
        return `I’m ${this.age} year’s old`
    }

    set Age(age){
        this.age = age;
    }

    get Info(){
        return `My name is ${this.name}, I am ${this.age} years old`
    }

}

let Dog = new Pet('ABC',4);
console.log(Dog.Age);
Dog.Age = 14;
console.log(Dog.Age);
console.log(Dog.Info);
