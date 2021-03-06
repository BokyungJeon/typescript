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
  let name: undefined; // ๐ฉ 
  let age: number | undefined; // undefined ๋จ๋์ผ๋ก ์ฐ์ง ์๋๋ค. ๋ณดํต null๋ณด๋ค ๋ง์ด ์ด๋ค.
  age = undefined;
  age = 1;
  function find(): number | undefined { // ์ฐพ์ผ๋ฉด ์ซ์๋ฅผ, ๋ชป์ฐพ์ผ๋ฉด undefined๋ฅผ ๋ฆฌํด
    return undefined;
  }

  // null
  let person: null; // ๐ฉ
  let person2: string | null; // undefined์ฒ๋ผ null ๋จ๋์ผ๋ก ์ฐ์ง ์๋๋ค.(์๋ฏธ x)

  // unknown ๐ฉ ์๋ฌด๊ฑฐ๋ ๊ฐ๋ฅ(์๋ฐ์คํฌ๋ฆฝํธ). ์ฌ๋งํ๋ฉด ์ฐ์ง์๋๋ค.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any ๐ฉ unknown๊ณผ ๊ฐ์ง๋ง ๋น๋น
  let anything: any = 0;
  anything = 'hello';

  // void ์๋ต๊ฐ๋ฅ. ํ์ฌ ๊ฐ์ด๋ ๋ฐ๋ผ์.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // ๐ฉ

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message); // ์๋ฌ๋ฅผ ๋์ง๊ฑฐ๋
    while (true) {} // ๋๋์ง์๋ ์ฝ๋๋ ๋ฆฌํด์ด ์์ผ๋๊น never
  }
  let neverEnding: never; // ๐ฉ

  // objet
  let obj: object; // ๐ฉ ์์ํ์ ์ ์ธํ ๋ชจ๋  ์ค๋ธ์ ํธ ํ์ ๊ฐ๋ฅ(๋ฐฐ์ดํฌํจ)
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
