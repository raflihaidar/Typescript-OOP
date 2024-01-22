describe('polymorpism', () => { 
  class Employee {
    constructor (
      public name : string
    ){
      console.log(`name : ${this.name}`)
    }

    sayHello(employee : Employee){
      if(employee instanceof Director){
        const director = employee as Director;
        console.log(`Hello director ${director.name}`);
      }else if(employee instanceof Manager){
        const manager = employee as Manager;
        console.log(`Hello manager ${manager.name}`);
      }else{
        console.log(`Hello employee ${employee.name}`);
      }
    }
    sayHelloError(employee: Employee): string {
      if (employee instanceof Manager) {
        const manager = employee as Manager;
        return `Hello manager ${manager.name}`;
      } else if (employee instanceof Director) {
        const director = employee as Director;
        return `Hello director ${director.name}`;
      } else {
        return `Hello employee ${employee.name}`;
      }
    }
  }

  class Manager extends Employee {

  }

  class Director extends Manager {

  }

  it('should can implements polymorpism', () => {
    let employee = new Employee('Rafli');
    employee = new Manager('Haidar');
    employee = new Director('Nashif');

    employee.sayHello(new Director("Zaky"));
  })

  it('should can output hello manager', () => {
    let employee = new Employee('Budi');
    expect(employee.sayHelloError(new Director('Eko'))).toBe("Hello Director Budi");
  })
})