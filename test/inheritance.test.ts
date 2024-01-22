describe('Inheritance', () => {
  class Employee {
    name : string;

    constructor(name : string){
      this.name = name;
    }

    sayHello(name : string){
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    departement : string;

    //super constructor
    constructor(name :string, departement : string){
      super(name);
      this.departement = departement;
    }

    sayHello(name : string){
      console.log(`Hello ${name}, my name is ${this.name}, im young manager`);
    }
  }

  class Director extends Manager {
    sayHello(name: string): void {
        super.sayHello(name);
        console.log(" And my director is Bapak Budi");
    }

  }

  it('should can inherit', () => {
    const employee = new Employee('rafli');
    console.log(employee.name);

    const manager = new Manager('haidar', 'Telkom Indonesia');
    manager.sayHello('Zaky');
    console.log(manager.name);
    console.log(manager.departement);

    const director = new Director('nashif', 'Pertamina');
    director.sayHello('Peres');
    console.log(director.name);
  })
})