// Type Alias
type user = {
  age: number;
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  isMarried: string;
  address: string;
};

const user1: user = {
  age: 23,
  id: 343424252,
  name: {
    firstName: "Sagor",
    lastName: "Sarker",
  },
  isMarried: "Married",
  address: "Sirajgong Rajshahi",
};

const user2: user = {
  age: 23,
  id: 343424252,
  name: {
    firstName: "Haridas",
    lastName: "Sarker",
  },
  isMarried: "No married",
  address: "Sirajgong",
};
const {
  age,
  id,
  name: { firstName, lastName },
  address,
  isMarried,
} = user1;
console.log(age, id, firstName, lastName, address, isMarried);
