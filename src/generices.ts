// function generice
type GetArrayType<T> = (value: T) => any;
const getNumber: GetArrayType<number> = (value) => {
  return value * value;
};
const getNumber1: GetArrayType<string> = (value) => {
  return `Hi ${value}`;
};
const result1 = getNumber(8);
console.log(result1);

const result2 = getNumber1("Horidas");
console.log(result2);
