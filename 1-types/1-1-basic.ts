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

  // 🐷 기본타입 🐷
  
  //  🤮는 가능하면 사용하지 않기!

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined : 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 🤮 이렇게 안씀 => 이렇게 단독으로 나올 수 없다
  let age: number | undefined; // 옵셔널 타입일 때 이렇게 주로 씀 
  age = undefined;
  age = 15;

  // null : 텅텅 빈 값
  let person: null; // 🤮 이런식 보단
  let person2: string | null; // 이렇게 많이 씀
  // 주로 언디파인 이용
  // undefined는 데이터 타입이 있거나 결정되지 않았거나
  // null 값이 있거나 없다는 것을 나타낼 때
  function find(): number | undefined {
    return undefined; // 숫자를 리턴하거나 언디파인을 리턴하거나
  }

  // unknown 🤮 가능하면 쓰지말기 => 자바스크립트의 라이브러리를 이용할 때 쓰는편
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 🤮 가능하면 쓰지말기
  let anything: any = 0;
  anything = 'hello';

  // void 아무것도 return 하지 않는 것
  function print(): void { // 생략할 수 있지만 명시해주는 것이 좋긴함 (회사에따라 다름)
    console.log('hello');
    return;    
  }
  let unusable: void = undefined; // 🤮

  // never  throwError:정말 예상치 못한, 핸들링할 수 없는 에러가 발생했을 때 호출할 수 있는 함수
  function throwError(message: string): never {
    // message -> sever (log)
    throw new Error(message); // 이함수를 호출하면 나는 리턴할 계획이 없으니 감안해!
    while(true) {
      // 이 경우도 멈추지않고 빙글빙글 돌아 never가 됨
    }
    let neverEnding: never; // 🤮 의미 없는 코드

    /*return;*/ // return 할 수 없는 타입이므로 에러가 남
  }

  // object
  let obj: object; // 🤮 어떤 타입이든지 담을 수 있기 때문에 함부로 쓰면 안된다!!!
  function acceptSomeObject(obj: object) {

  } // 어떤 object든지 전달할 수 있음
  acceptSomeObject({ name: 'piggy' });
  acceptSomeObject({ animal: 'pig' });

}