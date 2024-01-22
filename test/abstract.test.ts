describe('Absract Class', () => {
  abstract class Person {
    private readonly id : number;
    abstract name : string;
    constructor(id : number) {
      this.id = id;
    }

    abstract sayHello(name : string) : void;
  }

  class Employee extends Person{
    public name : string;
    constructor(id : number, name : string){
      super(id);
      this.name = name;
    }
    
    sayHello(name: string): void {
        console.log(`Hello ${name}`);
    }
  }

  it('should can output sayHello method', () => {
    const person = new Employee(1, 'Rafli Haidar');
    person.sayHello('Nashif');
  })
})