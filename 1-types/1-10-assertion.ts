{
  /**
   * Type Assertion ๐คฎ  ํ์์ ๊ฐ์ํ  ๋
   */
  function jsStrFunc(): any {
    return 'hello'
  }
  const result = jsStrFunc();
  // result.length // result๊ฐ ๋ฌธ์์ด์ด ์๋๊ณ  any๋ผ์ ํจ์๋ฅผ ์ฌ์ฉํ  ์ ์์
  // ์ด๋ result๊ฐ ๋ฌธ์์ด์ธ ๊ฒ์ ํ์ ํ  ์ ์์ ๋ 
  // Type Assertion ์ ์ฌ์ฉํจ

  console.log((result as string).length); // 5
  console.log((<string>result).length); // ๋ณํ
  // ํ์ง๋ง ์ด๋ ์ ํจ์์ return ์ด 2๋ก ๋ฐ๋์ด๋ ํ์ฌ์ํฉ์์ ์ถ๋ ฅ์ํค๊ธฐ ์ ์๋ ์ค๋ฅ๊ฐ ๋ฐ์ํ์ง ์์
  // ์ด๋์ ๋ฐ๋์ string์ด๋ผ๋ ๊ฒ์ ํ์ ํ  ์ ์์ ๋๋ง assertion์ ์ฌ์ฉํ๋ ๊ฒ

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // ๐คฎ => ์ถ๋ ฅ์ ์๋ฌ๋ฐ์!! wrong์ push๋ฅผ ์ฌ์ฉํ  ์ ์๋ค๊ณ  type์๋ฌ ๋ฐ์!

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // ๐คฎ
  numbers!.push(2); // ๐คฎ ํ์ ํ ๋ !๋ฅผ ๋ถ์ => ๋ฌด์กฐ๊ฑด null์ด ์๋์ผ! ๋ฌด์กฐ๊ฑด undefined์ด ๋  ์ ์์ด!

  // ex
  const button = document.querySelector('class')!; // ์ ๋ง 100% ์ฅ๋ดํ  ์ ์์ ๋ ๋ค์ !๋ฅผ ๋ถ์ฌ์ค
  if (button) { // ๊ทธ๋ ์ง ์์ ๊ฒฝ์ฐ์ ์ด๋ ๊ฒ ๋ง์์ค, null ์ผ์๋ ์๊ธฐ ๋๋ฌธ   
    button.nodeValue;
  }


}