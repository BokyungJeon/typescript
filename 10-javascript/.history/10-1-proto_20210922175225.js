const x = {};
const y = {};
console.log(x);
console.log(y);
// __proto__
// javascript의 모든 object는 __proto__라는 객체를 상속한다(가지고 있다.).
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  this.makeCoffee = (shots) => {
    console.log("making...☕️");
  };
}
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);
