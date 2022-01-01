/**
 * Type Inference 타입추론 
 */
let text = 'hello'; // 타입 명시하지 않아도 선언과 동시에 할당했기 때문에 타입스크립트가 타입 추론해서 지정하므로 뻔한 타입의 경우 생략가능. 
function print(message = 'hello') { // default를 명시하면 타입을 추론
  console.log(message);
}
print('hello');

function add(x: number, y: number) {
  return x + y; // 추론 가능
}
const result = add(1, 2); // 자동으로 타입 결정

// 타입 추론은 지양. 코드가 길어지므로 타입을 명시해주자.
