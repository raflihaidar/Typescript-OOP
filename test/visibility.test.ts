describe('visibility', () => {
  class Employee {
    private id : number;
    private name : string;
    private address : string;
    protected salary : number = 0;

    public constructor(id : number, name : string, address : string){
      this.id = id;
      this.name = name;
      this.address = address;

      console.log("id : ", this.id);
      console.log("name :", this.name);
      console.log("address :", this.address);
    }

    public countSalary() : void {
      this.salary++;

      console.log("salary employee : ", this.salary);
    }

    public sayHello(name : string) : void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    public countSalary(): void {
        this.salary += 2;

        console.log("salary manager : ", this.salary);
    }
  }

  it('test visibility', () => {
    const employee = new Employee(1, "Rafli Haidar", "Siwalankerto Permai");
    employee.countSalary();

    const manager = new Manager(1, 'Nashif', 'Jember');
    manager.countSalary();
  })
})