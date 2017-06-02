module.exports = {
  age: 21,
  name: "Kenny",
  about: function(){
    console.log(this.name + " is " + this.age + " years old");
  }
}