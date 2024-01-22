describe('static', () => { 
  class Person {
    public static ID : number = 1; 
    public static NAME : string = "Rafli Haidar Nashif"; 
  }

  it('should can declare static field', () => {
    console.log("ID : ", Person.ID);
    
    console.log("Name : ", Person.NAME);
  })
})