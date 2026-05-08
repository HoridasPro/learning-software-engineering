class Father {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  everyOrder(input: string) {
    console.log(`Baba protidin ${input} bar order kore`);
  }
}
class Son extends Father {
  constructor(name: string) {
    super(name);
  }

  doStudy(input: string) {
    console.log(`Ami babar order a protidin ${input} hours study kori`);
  }
}

class Dauther extends Father {
  constructor(name: string) {
    super(name);
  }
  doWord(input: string) {
    console.log(`Ami babar order a protidin ${input} hours barite kaj kori`);
  }
}
const getSonDoutherInfo=(worker:Father)=>{}

const son1=new Son("Mohin Sarker")
const dauther1=new Dauther("Boishakhi")