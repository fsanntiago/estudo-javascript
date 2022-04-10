/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}

const john = new Person("john");
const maria = new Person("maria");

console.log(john.walk());
console.log(maria.walk());
