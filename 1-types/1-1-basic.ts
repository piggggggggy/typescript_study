{
  // Javascript
  // old: var
  // var age = 5;
  // age = 1;

  // let es6 
  // let name = 'hello';
  // name = 'hi';

  // const
  // const age = 5;
  // age = 5;

  /** JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefiend 
   * Object: function, array.......
   */

  // ๐ท ๊ธฐ๋ณธํ์ ๐ท
  
  //  ๐คฎ๋ ๊ฐ๋ฅํ๋ฉด ์ฌ์ฉํ์ง ์๊ธฐ!

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined : ๊ฐ์ด ์๋์ง ์๋์ง ๊ฒฐ์ ๋์ง ์์ ์ํ
  let name: undefined; // ๐คฎ ์ด๋ ๊ฒ ์์ => ์ด๋ ๊ฒ ๋จ๋์ผ๋ก ๋์ฌ ์ ์๋ค
  let age: number | undefined; // ์ต์๋ ํ์์ผ ๋ ์ด๋ ๊ฒ ์ฃผ๋ก ์ 
  age = undefined;
  age = 15;

  // null : ํํ ๋น ๊ฐ
  let person: null; // ๐คฎ ์ด๋ฐ์ ๋ณด๋จ
  let person2: string | null; // ์ด๋ ๊ฒ ๋ง์ด ์
  // ์ฃผ๋ก ์ธ๋ํ์ธ ์ด์ฉ
  // undefined๋ ๋ฐ์ดํฐ ํ์์ด ์๊ฑฐ๋ ๊ฒฐ์ ๋์ง ์์๊ฑฐ๋
  // null ๊ฐ์ด ์๊ฑฐ๋ ์๋ค๋ ๊ฒ์ ๋ํ๋ผ ๋
  function find(): number | undefined {
    return undefined; // ์ซ์๋ฅผ ๋ฆฌํดํ๊ฑฐ๋ ์ธ๋ํ์ธ์ ๋ฆฌํดํ๊ฑฐ๋
  }

  // unknown ๐คฎ ๊ฐ๋ฅํ๋ฉด ์ฐ์ง๋ง๊ธฐ => ์๋ฐ์คํฌ๋ฆฝํธ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ด์ฉํ  ๋ ์ฐ๋ํธ
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any ๐คฎ ๊ฐ๋ฅํ๋ฉด ์ฐ์ง๋ง๊ธฐ
  let anything: any = 0;
  anything = 'hello';

  // void ์๋ฌด๊ฒ๋ return ํ์ง ์๋ ๊ฒ
  function print(): void { // ์๋ตํ  ์ ์์ง๋ง ๋ช์ํด์ฃผ๋ ๊ฒ์ด ์ข๊ธดํจ (ํ์ฌ์๋ฐ๋ผ ๋ค๋ฆ)
    console.log('hello');
    return;    
  }
  let unusable: void = undefined; // ๐คฎ

  // never  throwError:์ ๋ง ์์์น ๋ชปํ, ํธ๋ค๋งํ  ์ ์๋ ์๋ฌ๊ฐ ๋ฐ์ํ์ ๋ ํธ์ถํ  ์ ์๋ ํจ์
  function throwError(message: string): never {
    // message -> sever (log)
    throw new Error(message); // ์ดํจ์๋ฅผ ํธ์ถํ๋ฉด ๋๋ ๋ฆฌํดํ  ๊ณํ์ด ์์ผ๋ ๊ฐ์ํด!
    while(true) {
      // ์ด ๊ฒฝ์ฐ๋ ๋ฉ์ถ์ง์๊ณ  ๋น๊ธ๋น๊ธ ๋์ never๊ฐ ๋จ
    }
    let neverEnding: never; // ๐คฎ ์๋ฏธ ์๋ ์ฝ๋

    /*return;*/ // return ํ  ์ ์๋ ํ์์ด๋ฏ๋ก ์๋ฌ๊ฐ ๋จ
  }

  // object
  let obj: object; // ๐คฎ ์ด๋ค ํ์์ด๋ ์ง ๋ด์ ์ ์๊ธฐ ๋๋ฌธ์ ํจ๋ถ๋ก ์ฐ๋ฉด ์๋๋ค!!!
  function acceptSomeObject(obj: object) {

  } // ์ด๋ค object๋ ์ง ์ ๋ฌํ  ์ ์์
  acceptSomeObject({ name: 'piggy' });
  acceptSomeObject({ animal: 'pig' });

}