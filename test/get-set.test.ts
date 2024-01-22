describe("getter & setter", () => {
  class Category {
    _name : string;

    get name() : string{
      if(this._name){
        return this._name;
      }else{
        return "empty";
      }
    }

    set name(name : string) {
      if(name){
        this._name = name
      }
    }
  }
  
  it('should can use getter and setter', () => {
    const category = new Category()
    category.name = "Food"
    console.log(category.name)
    category.name = ''
    console.log("string kosong", category.name)
  })
})