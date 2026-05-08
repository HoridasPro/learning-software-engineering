class Shape {
  getArea(): number {
    return 0;
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    ((this.width = width), (this.height = height));
  }
  getArea(): number {
    return this.width * this.height;
  }
}
class Perimeter extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return 2 * (this.width + this.height);
  }
}

const getAreas = (input: Shape) => {
  console.log(input.getArea());
};
const shap = new Shape();
const rectangle = new Rectangle(5, 2);
const perimeter = new Perimeter(5, 2);
getAreas(shap);
getAreas(rectangle);
getAreas(perimeter);
