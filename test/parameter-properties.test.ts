describe('Parameter Properties', () => {
  class Person{
    constructor(
      protected _id : number,
      public _name : string
    ){
      console.log(`id ${this._name} : ${this._id}`)
    }
  }

  class Employee extends Person {
    showId() : number {
      return this._id;
    }
  }

  it('should can output this field', () => {
    const person = new Person(1, "Haidar");

    const employee = new Employee(2, "Rafli");
    console.log("id rafli : ", employee.showId());
    
  })
})