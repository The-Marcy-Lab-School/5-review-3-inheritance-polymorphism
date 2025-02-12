class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Some generic sound";
  }
}

// Dog Inherits the constructor and makeSound methods from User
class Dog extends Animal {
  makeSound() {
    return "Woof!"; // Overriding method (polymorphism)
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!"; // Overriding method (polymorphism)
  }
}

const animals = [
  new Dog("Buddy"),
  new Cat("Whiskers")
];

// The Dog and Cat instances are also Animal instances
animals.forEach((animal) => {
  console.log(animal);
  console.log(`Is also an animal: ${animal instanceof Animal}`);
});

// Polymorphism: every Animal can make a sound
animals.forEach((animal) => {
  console.log(`${animal.name}: ${animal.makeSound()}`)
});