const getCalculate = (input: unknown) => {
  if (typeof input === "number") {
    const disCountable = input * 0.1;
    console.log(disCountable);
  } else if (typeof input === "string") {
    const disCountable = input.split(" ");
    console.log(Number(disCountable) * 0.1);
  } else {
    console.log("This is unknown");
  }
};
getCalculate(200);
getCalculate("100 tk");
getCalculate("23");
