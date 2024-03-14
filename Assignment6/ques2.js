// ? 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){}
}


class Rectangle extends Shape {
    constructor(width, height) {
      super(width, height); // Call parent constructor
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(width, height) {
      super(width, height); // Call parent constructor
    }
  
    getArea() {
      return 0.5 * this.width * this.height;
    }
  }
  
  // Create instances
  const rectangle = new Rectangle(5, 4);
  const triangle = new Triangle(3, 6);
  
  console.log("Rectangle area:", rectangle.getArea());
  console.log("Triangle area:", triangle.getArea());