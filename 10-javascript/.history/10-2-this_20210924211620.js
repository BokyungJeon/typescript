console.log(this);

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // === window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase; // increase의 this가 caller에 할당되면서 this의 정보를 잃어버림
// let과 const로 선언한 변수는 window에 등록되지 않으므로(글로벌객체에서 사용불가) caller를 호출하는 것은 window는 물론 어떤 오브젝트도 아니기 때문에 undefine을 호출하는 것과 같다.
// 함수는 기본적으로 글로벌 객체(window.)에 등록이 되어 글로벌 객체에서 이용이 가능하다(window.함수();)
// var는 밑에서 사용해도 위에서 선언되는 호이스팅문제 뿐만아니라, 선언 후 재정의가 되는 문제(window.로 접근 가능)가 있으므로 사용하지 않는다.
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
