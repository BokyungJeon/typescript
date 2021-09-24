// 모듈화하지 않으면 기본적으로 글로벌스코프로 책정된다.
// 다른 파일에 중복된 이름의 함수가 존재하면 어떤 함수가 먼저 호출되는지 알 수가 없게 된다.
// 충돌을 피하기 위해 모듈화해 작성하며 html파일에 <script type="module" src=""></script>로 지정한다.

export default function add(a, b) {
  return a + b;
}
// default는 한 파일에 하나민 존재
export function print() {}
