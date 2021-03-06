{
  // JavaScript ๐คฎ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number { // ๋ค์๋ return type
    return num1 + num2;
  }

  // JavaScript ๐คฎ
  function jsFetchNum(id) {
    //..
    //..
    //..
    return new Promise((resolve, reject)) => {
      resolve(100);
    }
  }

  // TypeScript
  function fetchNum(id: string): Promise<number> {
    //..
    //..
    //..
    return new Promise((resolve, reject)) => {
      resolve(100);
    }
  }

  // ํ์์ ๊ธฐ๋กํจ์ผ๋ก์จ ์ข ๋ ์ง๊ด์ ์ธ ์ฝ๋๋ฅผ ์์ฑํ  ์ ์์

  // JavaScript ๐ท => TypeScript

  // Optional parameter
  function printName(firstName: string, lastName?: string) { // Optional parameter ? :์ ๋ฌ ๋ฐ์๋ ๋๊ณ  ์๋ฐ์๋ ๋๋ค.
    console.log(firstName);                                  // string | undefined ๋ก ์ ๊ทผํด๋ ๋์ง๋ง ์ด๋ ๋ฌด์กฐ๊ฑด parameter๋ก undefined์ ์ค์ผํจ
    console.log(lastName);
  }
  printName('piggy', 'park');
  // printName('piggy',0); // ์๋ฌ๋ฐ์
  // ์ฑ์ ์๋ ฅํ์ง ์๋๋ผ๋ ์ด๋ฆ๋ง ์ถ๋ ฅํ  ์ ์๋ ํจ์๋ฅผ ๋ง๋ค๊ณ  ์ถ์ ๋ 
  // ์ต์๋ ํ๋ผ๋ฏธํฐ๋ฅผ ์ด์ฉ // ์์ ? ์ถ๊ฐ
  printName('piggy');
  printName('piggy', undefined); // Optional ์ธ ๊ฒฝ์ฐ์๋ undefined๋ฅผ ์ ๋ฌํ์ง ์์๋ ๋จ
  // ๋๋ค ๊ฐ๋ฅํด์ง

  // Default parameter
  function printMessage(message: string = 'default message') { // js์์ ๋ช๋ฒ ๋ดค๋ ๊ฑฐ ใใ
    console.log(message);
  }
  printMessage(); // ์ ๋ฌํ์ง ์์๋ default ๊ฐ์ด ๋์ด

  // Rest parameter ...
  function addNumbers(...numbers: number[]): number { // numbers๋ฅผ ์ซ์๋ก๋ []์ ๋ด๋๋ค
    return numbers.reduce((a, b) => a + b); // reduce๋ฌธ๋ฒ ๊ณต๋ถํ์!
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
  // console.log(addNumbers(1, 2, 'dd')); // ์๋ฌ๋จ
  
}