{
  /*
   * Type Assertions π©
   */
  function jsStrFunc(): any {
    // return 'hello'
    return 2;
  }
  const result = jsStrFunc();
  // anyνμμ λ¬Έμμ΄ APIλ₯Ό μ¬μ©νμ§ λͺ»νλ―λ‘ stringμ΄λΌλ νμ μ΄ μμλ as μ¬μ© κ°λ₯νμ§λ§ μ¬μ©νμ§ λ§μ.
  console.log((result as string).length); // μ«μμΌ κ²½μ° μ€νμμ undefined. μμνμ§ λͺ»νλ λ¬Έμ λ°μ κ°λ₯.
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // μλ¬ λ°μνκ³  μ’λ£λ¨π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; // μ₯λ΄ν  λ ! νΉμ
  numbers!.push(2); // μ₯λ΄ν  λ ! π± 

  const button = document.querySelector('class')!; // μ λ§μ λ§ μ₯λ΄ν  λ. λ²νΌλ¬΄μ‘°κ±΄μμ λ
  // if(button) {
  //   button.nodeValue
  // }
}
