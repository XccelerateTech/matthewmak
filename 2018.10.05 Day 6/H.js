class Animal {
    constructor (name) {
        this.name = name;
    }

    can_fly(){
        console.log(`${this.name} is flying!`);
    }
    can_feed_milk(){
        console.log(`${this.name} is feeding milk!`);
    }
    can_swim(){
        console.log(`${this.name} is swimming!`);
    }
    can_lay_eggs(){
        console.log(`${this.name} is laying eggs!`);
    }
}

class Bat {
    constructor (name) {
        this.animal = new Animal(name);
    }

    can_fly(){
        return this.animal.can_fly();
    }

    can_feed_milk(){
        return this.animal.can_feed_milk();
    }

    can_swim(){}
    can_lay_eggs(){}
}

class Fish {
    constructor (name) {
        this.animal = new Animal(name);
    }

    can_swim(){
        return this.animal.can_swim();
    }

    can_lay_eggs(){
        return this.animal.can_lay_eggs();
    }

    can_fly(){}
    can_feed_milk(){}
}

class Whale {
    constructor (name) {
        this.animal = new Animal(name);
    }

    can_swim(){
        return this.animal.can_swim();
    }

    can_feed_milk(){
        return this.animal.can_feed_milk();
    }

    can_fly(){}
    can_lay_eggs(){}
}

class Bird {
    constructor (name) {
        this.animal = new Animal(name);
    }

    can_fly(){
        return this.animal.can_fly();
    }

    can_lay_eggs(){
        return this.animal.can_lay_eggs();
    }

    can_swim(){}
    can_feed_milk(){}
}   

const bat = new Bat('bat');
const fish = new Fish('fish');
const whale = new Whale('whale');
const bird = new Bird('bird');
const animal = [bat, fish, whale, bird];

for (let i of animal) {
    i.can_fly();
    i.can_swim();
    i.can_feed_milk();
    i.can_lay_eggs();
}