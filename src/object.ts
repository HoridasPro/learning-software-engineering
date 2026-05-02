const userInfo: {
  readonly organization: string;
  firstName: string;
  midleName?: string; //obtional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Haridas",
  midleName: "Sarker",
  lastName: "Sagor",
  isMarried: true,
};
console.log(userInfo);
