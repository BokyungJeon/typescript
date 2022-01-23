const x = {};
const y = {};
console.log(x);
console.log(y);
// __proto__
// javascript의 모든 object는 __proto__라는 객체를 상속한다(가지고 있다.).
console.log(x.toString()); // proto에 기본적인 함수들이 들어있다.
console.log(x.__proto__ === y.__proto__); // true. x, y는 동일한 Object를 상속.

const array = [];
console.log(array); // array는 Array를 상속하고, Array는 Object를 상속한다.

console.clear();

function CoffeeMachine(beans) { // constructor와 비슷한 역할의 함수.
  this.beans = beans;
  // instance member level. 아래 함수가 만들어진 오브젝트(인스턴스)마다 포함됨.
  /*this.makeCoffee = (shots) => {
    console.log("making...☕️");
  }; */
}
// Prototype member level. 한 번만 정의하고 싶다면 prototype을 이용.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...☕️"); 
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // LatteMachine이 CoffeeMachine을 상속

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
