// Array
const schoolFrineds: string[] = ["abal", "tabal", "babal", "chabol", "khabol"];
const collegeFriends: string[] = ["nabil", "tabil", "jabil", "kabil"];
const uniFriends: string[] = ["rahim", "karim", "jorim", "forim"];
schoolFrineds.push(...collegeFriends, ...uniFriends);
console.log(schoolFrineds);

// Object
const user = { name: "Haridas Sarker", age: 12 };
const otherUserInfo = { Salary: 30000, Favourite: "I love coding" };
const userInfo = { ...user, ...otherUserInfo };
console.log(userInfo);
