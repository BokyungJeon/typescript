{
  // // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript ✨
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript ✨ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) { // optional이 아닌 string | undefined로 해놓으면 무조건 undefined가 명시해서 전달받아야함 안이쁨
    console.log(firstName);
    console.log(lastName); // 전달하지 않으면 undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie'); 
  printName('Anna', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message); // 전달하지 않으면 default값
  }
  printMessage();

  // Rest parameter  개수 상관없이 인자들을 number배열로 받음
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
