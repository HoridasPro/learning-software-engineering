// Union/Or
type userRole = "Admin" | "User";
const getDashboard = (role: userRole) => {
  if (role === "Admin") {
    return "Admin Dashboard";
  } else if (role === "User") {
    return "User Dashboard";
  } else {
    return "Geast";
  }
};
console.log(getDashboard("User"));

// Intersection / And
type manager = {
  name: string;
  age: number;
  address: string;
};

type employee = {
  destination: string;
  price: number;
  isMarried: string;
};
type employeeManager = manager & employee;
const myEmploteeManager: employeeManager = {
  name: "Haridas",
  age: 23,
  address: "Sirajgong",
  destination: "Dhaka",
  price: 123234,
  isMarried: "No Married",
};
const { name, age, address, destination, price, isMarried } = myEmploteeManager;
const result = { name, age, address, destination, price, isMarried };
console.log(result);
