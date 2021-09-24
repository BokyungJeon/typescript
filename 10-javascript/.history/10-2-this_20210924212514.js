console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // === window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = () => {
    // increase = function () {}으로 작성되어 있을 때는 문맥에 따라 this가 변경된다
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // this는 counter
// const caller = counter.increase;
// increase의 this가 caller에 할당되면서 this의 정보를 잃어버림
// let과 const로 선언한 변수는 window에 등록되지 않으므로(글로벌 객체인 window에서 사용불가) caller는 어떤 오브젝트도 아니기 때문에 this는 undefine
// 함수는 기본적으로 글로벌 객체(window.)에 등록이 되어 글로벌 객체에서 이용이 가능하다(window.함수();)
// var는 밑에서 사용해도 위에서 선언되는 호이스팅문제 뿐만아니라, 선언 후 재정의가 되는 문제(window.로 접근 가능)가 있으므로 사용하지 않는다.
// const caller = counter.increase.bind(counter);
// this의 정보를 잃어버리지 않기 위해서 .bind를 해준다
// 이게 불편하면 처음부터 함수를 arrow function으로 만들자 () => {}
// 화살표함수를 쓰면 다른 언어처럼 선언될 당시 class를 this로 기억한다
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 이 때의 this는 Bob
