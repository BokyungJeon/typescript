{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩 
  let age: number | undefined; // undefined 단독으로 쓰지 않는다. 보통 null보다 많이 쓴다.
  age = undefined;
  age = 1;
  function find(): number | undefined { // 찾으면 숫자를, 못찾으면 undefined를 리턴
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null; // undefined처럼 null 단독으로 쓰지 않는다.(의미 x)

  // unknown 💩 아무거나 가능(자바스크립트). 웬만하면 쓰지않는다.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 unknown과 같지만 당당
  let anything: any = 0;
  anything = 'hello';

  // void 생략가능. 회사 가이드 따라서.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message); // 에러를 던지거나
    while (true) {} // 끝나지않는 코드는 리턴이 없으니까 never
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩 원시타입 제외한 모든 오브젝트 타입 가능(배열포함)
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
