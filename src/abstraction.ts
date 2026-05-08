abstract class Vehicle {
  abstract startCar(): void;
  abstract stopCar(): void;

  extraStart() {
    console.log(`This is auto start`);
  }
}
class Car extends Vehicle {
  startCar(): void {
    console.log(`The car is started`);
  }
  stopCar(): void {
    console.log(`The car is stoped`);
  }
}
class Bike extends Vehicle {
  startCar(): void {
    console.log(`The bike is started`);
  }
  stopCar(): void {
    console.log(`The bike is stoped`);
  }
}
class Cycle extends Vehicle {
  startCar(): void {
    console.log(`The cycle is started`);
  }
  stopCar(): void {
    console.log(`The cycle is started`);
  }
}
const car = new Car();
const bike = new Bike();
const cycle = new Cycle();
car.extraStart();
car.startCar();
car.stopCar();
bike.startCar();
bike.stopCar();
cycle.startCar();
cycle.stopCar();
