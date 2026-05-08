type NormalUser = {
  name: string;
};
type Specialuser = {
  name: string;
  role: "Admin";
};
type CheckUser = NormalUser | Specialuser;

const getUser = (user: CheckUser) => {
  if ("role" in user) {
    return `${user.name} holo special user ja se holo akjon ${user.role}`;
  } else {
    return `${user.name} holo just Normal user`;
  }
};
const result = getUser({ name: "Horidas" });
console.log(result);


