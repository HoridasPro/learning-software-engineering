// Turnary operator
const getJob = (jobMonth: number) => {
  const finalyJob =
    jobMonth >= 2 ? "I will marry but will be late" : "I will marry";
  console.log(finalyJob);
};
getJob(4);

// Nulish coalecing operator
const nulish = (nulishOperator: undefined) => {
  const result = nulishOperator ?? "This is nulish operator";
  console.log(result);
  const result1 = nulishOperator ? "This is undefined" : "Not undefined";
  console.log(result1);
};

nulish(undefined);

// Chianing Operator
const user: {
  name?: string;
  age: number;
} = {
  name: "Haridas",
  age: 12,
};
console.log(user?.name);
