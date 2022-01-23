// 한 모듈은 한 파일 안에 작성된 코드를 말한다. 
// 코드를 따로 모듈화해서 작성하지 않으면 여러 파일 안의 모든 코드들이 global scope로 책정된다.(브라우저-Window, 노드-global)
// 다른 파일에 중복된 이름의 함수가 존재하면 이름 충돌이 발생한다. (내가 쓴 파일들 간, 혹은 가져온 라이브러리와 중복 가능)
// 파일을 모듈화하면 기본적으로 다른 파일에 있는 코드에 접근하거나 사용할 수 없다.
// 함수, 클래스, 변수 등을 다른 파일(모듈)에서 이용하고 싶다면 해당하는 것을 export하고 사용할 곳에서 import 해야한다.

// 충돌을 피하기 위해 모듈화하려면 html파일에 <script type="module" src=""></script>로 지정한다.

// export default function add(a, b) {
//   return a + b;
// }
// export default는 {}없이 불러와서 내맘대로 이름을 정의해 쓸 수 있다.
// import 아무이름내가정의 from "파일위치";
// defualt가 아니면 imrport { 동일한 이름, 동일한 함수 이름 } from '파일위치';
// 다른 이름으로 쓰고 싶으면 {동일한이름 as 내가정의하고싶은이름}
// default는 한 파일에 하나민 존재(아님 에러). 없어도 큰일은 안남.
export function add(a, b) {
  return a + b;
}

export function print() {}
export const number = 10;
