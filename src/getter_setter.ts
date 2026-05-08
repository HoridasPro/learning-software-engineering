class Developer {
  name: string;
  balance: number;
  technology: string;

  constructor(name: string, balance: number, technology: string) {
    ((this.name = name),
      (this.balance = balance),
      (this.technology = technology));
  }

  // Setter method
  set setBalance(balance: number) {
    this.balance = this.balance + balance;
  }

  // Getter method
  get getBalance() {
    return this.balance;
  }
}
const developer = new Developer("Haridas Sarker", 50000, "TypeScript");
console.log(developer);
developer.setBalance = 50000;
developer.getBalance;
console.log(developer.getBalance);
   