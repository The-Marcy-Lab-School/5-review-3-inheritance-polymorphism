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

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2);
  }
  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(side1) {
    super(side1, side1);
  }
  getDiagonal() {
    return (this.side1 * Math.sqrt(2)).toFixed(2);
  }
}

const myTrapezoid = new Quadrilateral(5, 3, 3, 8);
// console.log(myTrapezoid.getPerimeter()); // 19

const myRectangle = new Rectangle(2, 5, 2, 5);
// console.log(myRectangle instanceof Quadrilateral); // true
// console.log(myRectangle.getPerimeter()); // 14
// console.log(myRectangle.getArea()); // 10

const mySquare = new Square(5);
// console.log(mySquare instanceof Rectangle); // true
// console.log(mySquare instanceof Quadrilateral); // true
// console.log(mySquare.getPerimeter()); // 20
// console.log(mySquare.getArea()); // 25
// console.log(mySquare.getDiagonal()); // 7.07