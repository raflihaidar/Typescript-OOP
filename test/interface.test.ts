describe('Interface', () => {
  interface HasName {
    name : string
  }

  interface canSayHello {
    sayHello(name : string) : void;
  }

  class Person implements HasName, canSayHello{
    name : string;

    constructor(name : string){
      this.name = name;
    }

    sayHello(name: string): void {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it('should can output the interface contract', () => {
    const person = new Person('Rafli');
    person.sayHello('Haidar');
  })
})