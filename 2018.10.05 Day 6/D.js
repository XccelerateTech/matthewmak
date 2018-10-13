class Monster {
    constructor(name) {
        this.health = 100;
        this.name = name;
    }

    wound(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log('monster dead');
        };
    }



}

function hero(mon) {
    mon.wound(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
    console.log('You hit the ' + mon.name + '! It only have ' + mon.health + ' point health left.')
}

const zombie = new Monster('Zombie');
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);
hero(zombie);



