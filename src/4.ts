export {};
// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome home!");
    } else {
      console.log("The door is closed. You cannot come in.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("Invalid key. The door remains closed.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey()); // The door is now open.
house.comeIn(person); // Welcome home!

export {};
