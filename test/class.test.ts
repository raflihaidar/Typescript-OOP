describe('Class', () => {
  class Customer {
    constructor(){
      console.log("Hello, Good Morning!")
    }
  }

  class Order {

  }
  it('should be create class', () => {
    const customer : Customer = new Customer()
    const order = new Order()
  })
})