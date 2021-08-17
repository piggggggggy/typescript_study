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

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined : 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 이렇게 안씀 => 이렇게 단독으로 나올 수 없다
  let age: number | undefined; // 옵셔널 타입일 때 이렇게 주로 씀 
  age = undefined;
  age = 15;

  // null : 텅텅 빈 값
  let person: null; // 이런식 보단
  let person2: string | null; // 이렇게 많이 씀
  // 주로 언디파인 이용
  // undefined는 데이터 타입이 있거나 결정되지 않았거나
  // null 값이 있거나 없다는 것을 나타낼 때
  function find(): number | undefined {
    return undefined; // 숫자를 리턴하거나 언디파인을 리턴하거나
  }

}