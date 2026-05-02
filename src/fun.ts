//Normal function
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addNormal(10, 20));

//Arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addArrow(2, 5));

// objecet
const userInfo = {
  name: "Haridas",
  age: 17,
  monthlySalary: 20000,
  addMonthlySalary(quantity: number): number {
    const totalSalary = this.monthlySalary * quantity;
    return totalSalary;
  },
};
const result = userInfo.addMonthlySalary(5);
console.log(result);

// Call back function
const arr: number[] = [1, 2, 3, 4, 5];
const sqrArray = arr.map((el: number): number => el * el);
console.log(sqrArray);
