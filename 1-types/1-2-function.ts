{
  // JavaScript 🤮
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number { // 뒤에는 return type
    return num1 + num2;
  }

  // JavaScript 🤮
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

  // 타입을 기록함으로써 좀 더 직관적인 코드를 작성할 수 있음

  // JavaScript 🐷 => TypeScript

  // Optional parameter
  function printName(firstName: string, lastName?: string) { // Optional parameter ? :전달 받아도 되고 안받아도 된다.
    console.log(firstName);                                  // string | undefined 로 접근해도 되지만 이땐 무조건 parameter로 undefined을 줘야함
    console.log(lastName);
  }
  printName('piggy', 'park');
  // printName('piggy',0); // 에러발생
  // 성을 입력하지 않더라도 이름만 출력할 수 있는 함수를 만들고 싶을 때 
  // 옵셔널 파라미터를 이용 // 위에 ? 추가
  printName('piggy');
  printName('piggy', undefined); // Optional 인 경우에는 undefined를 전달하지 않아도 됨
  // 둘다 가능해짐

  // Default parameter
  function printMessage(message: string = 'default message') { // js에서 몇번 봤던 거 ㅎㅎ
    console.log(message);
  }
  printMessage(); // 전달하지 않아도 default 값이 나옴

  // Rest parameter ...
  function addNumbers(...numbers: number[]): number { // numbers를 숫자로된 []에 담는다
    return numbers.reduce((a, b) => a + b); // reduce문법 공부하자!
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
  // console.log(addNumbers(1, 2, 'dd')); // 에러남
  
}