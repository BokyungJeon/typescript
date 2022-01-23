{
  /*
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    // return 'hello'
    return 2;
  }
  const result = jsStrFunc();
  // any타입은 문자열 API를 사용하지 못하므로 string이라는 확신이 있을때 as 사용 가능하지만 사용하지 말자.
  console.log((result as string).length); // 숫자일 경우 실행에서 undefined. 예상하지 못하는 문제발생 가능.
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 에러 발생하고 종료됨😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // 장담할 때 ! 혹은
  numbers!.push(2); // 장담할 때 ! 😱 

  const button = document.querySelector('class')!; // 정말정말 장담할 때. 버튼무조건있을 때
  // if(button) {
  //   button.nodeValue
  // }
}
