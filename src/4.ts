// const key = new Key();
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }
    getSignature(): number {
        return this.signature;
    }
}
// const person = new Person(key);

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key;
    }
}

// const house = new MyHouse(key);

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
    
    constructor(key: Key) {
        this.key = key;
    }
abstract openDoor(key: Key): void;

// house.comeIn(person);
comeIn(person: Person): void {
    if(this.door){
        this.tenants.push(person);
        console.log(`${person.getKey().getSignature()} entered the house.`)
    } else {
        console.log("The door is closed. Cann't enter.");
    }
}
}

// house.openDoor(person.getKey());

class MyHouse extends House {
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is already open.');
        } else {
            console.log('Invalid key. the door is closed.');
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.comeIn(person);
house.openDoor(person.getKey());





export {};