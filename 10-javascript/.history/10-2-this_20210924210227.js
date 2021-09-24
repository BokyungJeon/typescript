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
// let과 const로 선언한 변수는 window에 등록되어있지 않으므로 caller를 호출하는 것은 window는 물론 어떤 오브젝트도 아니기 때문에 undefine을 호출하는 것과 같다.
caller();
