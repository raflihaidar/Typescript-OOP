describe('Properties', () => {
  class Customer {
    readonly id : string;
    name : string;
    age? : number = 20; //optional field and have a default value
    constructor(id : string, name : string){
      this.id = id;
      this.name = name
      console.log("id : ", this.id);
      console.log("name : ", this.name);
      console.log("name : ", this.age);
    }
  }
  it('should can have properties', () => {
    const customer : Customer = new Customer("P001", "Rafli Haidar Nashif");
    // customer.age = 20;
  })
})