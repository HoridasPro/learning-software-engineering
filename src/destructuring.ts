// Destructuring of Object
const userInfo = {
  age: 12,
  dept: "CSE",
  name: {
    firstName: "Haridaa",
    middleName: "Sarker",
    lastName: "Sagor",
  },
  id: 123234434,
};
const {
  age,
  name: { firstName: myFristName },
} = userInfo;
console.log(age, myFristName);

// Destructuring of array
const developer = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
const [, , myTarget, ,] = developer;
console.log(myTarget);
