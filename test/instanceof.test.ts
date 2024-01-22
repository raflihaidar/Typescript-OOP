describe('Instanceof', () => { 
  class Manager{

  }

  class Director {

  }

  it('output with typeOf', () => {
    const manager = new Manager();
    const director = new Director();

    console.log(typeof manager); // output : object
    console.log(typeof director); 
  })

  it('output with instanceof', () => {
    const manager = new Manager();
    const director = new Director();

    if(manager instanceof Manager){ //instanceof mengembalikan nilai boolean true and false
      console.log(true);
      console.log("Manager")
    }
  })
})