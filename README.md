# 5-review-3-inheritance-polymorphism

## Review: Inheritance

**Inheritance** allows classes to inherit properties and methods using the `extends` keyword
* The `super` keyword can be used to reference the parent class's constructor / methods

```js
class Quadrilateral {
  // properties defined outside of the constructor are inherited too!
  description = '4-sided shape';

  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

// Rectangle inherits methods from Quadrilateral
class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    // Invoke the Quadrilateral constructor
    super(side1, side2, side1, side2); 
  }
  getArea() {
    return this.side1 * this.side2;
  }
}

// Square inherits methods from Rectangle
class Square extends Rectangle {
  constructor(side1) {
    // Invoke the Rectangle constructor
    super(side1, side1);
  }
  getDiagonal() {
    return (this.side1 * Math.sqrt(2)).toFixed(2);
  }
}

const myTrapezoid = new Quadrilateral(5, 3, 3, 8);
console.log(myTrapezoid.getPerimeter()); // 19

const myRectangle = new Rectangle(2, 5);
console.log(myRectangle instanceof Quadrilateral); // true
console.log(myRectangle.getPerimeter()); // 14
console.log(myRectangle.getArea()); // 10

const mySquare = new Square(5);
console.log(mySquare instanceof Rectangle); // true
console.log(mySquare instanceof Quadrilateral); // true
console.log(mySquare.getPerimeter()); // 20
console.log(mySquare.getArea()); // 25
console.log(mySquare.getDiagonal()); // 7.07
```

**Questions to answer:**
- What does `Rectangle` inherit from `Quadrilateral`?
  - ...
- What does `super()` do? 
  - ...
- What does `Square` inherit from `Rectangle`?
  - ...
- What does `Square` inherit from `Quadrilateral`?
  - ...
- What does `x instanceof y` do?
  - ...

## Review: Polymorphism

**Polymorphism** lets subclasses define their own behavior through **method overriding**
  
```js
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
```
**Questions to answer:**  
- Why do `Dog` and `Cat` not have their own `constructor`?
  - ...
- What happens if we remove `makeSound()` from `Dog` and `Cat`?
  - ...
  

## **Challenge: User Roles in a System**  
**Task:** In `challenge.js`, create a `User` class and extend it with `Admin` and `Guest`. Each role has different access permissions:
- `User` has `username` and a `getPermissions()` method (returns `"Create and Read"`).  
- `Admin` overrides `getPermissions()` to return `"Create, Read, Update, Delete"`.  
- `Guest` overrides `getPermissions()` to return `"Read-only"`.  

> See `challenge-solution.js` for the solution.

## Key points:
  - **Inheritance** allows classes to inherit properties and methods using the `extends` keyword
    - `super()` invokes the parent constructor and *must* be used if overriding the constructor. 
    - `super.method` will invoke the superclass's version of the method
  - **Polymorphism** lets subclasses define their own behavior.  
  - **Method overriding** customizes inherited behavior.  

Challenge:
- *Create an `Employee` class and extend it with `Manager` and `Intern`. Override a method to customize their work schedules.*  
