class Father {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    ((this.name = name), (this.age = age), (this.address = address));
  }

  getCall(input: number) {
    console.log(`Babar ${input} biga sompotti ase`);
  }
  getCall1(input: number) {
    console.log(`Manic ${input} biga sompotti pabe`);
  }
  getCall2(input: number) {
    console.log(`Haridas ${input} biga sompotti pabe`);
  }
}

// Boro cele
class BoroCele extends Father {}

// Soto cele
class SotoCele extends Father {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
}

// Object of father1
const father = new Father("Binoy", 20, "Bangladesh");
console.log(father);
father.getCall(100);

// Object of boro cele
const boroCele = new BoroCele("Manic", 34, "India");
console.log(boroCele);
boroCele.getCall1(50);

// Object of Soto cele
const sotoCele = new SotoCele("Haridas", 23, "sirajganj", "B.Sc in CSE");
console.log(sotoCele);
sotoCele.getCall2(50);
