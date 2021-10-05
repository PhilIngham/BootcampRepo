class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  set(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

// S.O.L.I.D

const frank = new Person("Frank", 20, "Male");

console.log(frank.getName());

class Animal {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(this.name, "is moving");
  }
}

class Lion extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

const leoTheLion = new Lion("Leo", 12);
leoTheLion.move();
