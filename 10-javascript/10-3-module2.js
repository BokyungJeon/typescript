// import add, { print as printMessage } from "./10-3-module1.js";
// console.log(run(1, 2));
// printMessage();
// export default는 {}없이 불러와서 내맘대로 이름을 정의해 쓸 수 있다.
// import 아무이름내가정의 from "파일위치";
// defualt가 아니면 imrport { 동일한 이름, 동일한 함수 이름 } from '파일위치';
// 다른이름으로 쓰고 싶으면 {동일한이름 as 내가정의하고싶은이름}
// console.log(add(1, 2));

// default가 없으면 다 가져와서 내가 정의한 이름으로 쓸 수 있다.
import * as calculator from "./10-3-module1.js";
console.log(calculator.add(1, 2));
calculator.print();
calculator.number;

// 모듈화는
// 이름 충돌 방지
// 코드 분리해 모듈성
// 모듈간 재사용성
