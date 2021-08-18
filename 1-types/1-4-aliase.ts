{
  // 기본적인 타입부터 복잡한 타입까지 정의할 수 있음
  
  /**
   * Type Aliases  : 새로운 타입을 정의할 수 있음
   */
  type Text = string;
  const name: Text = 'piggy';
  const address: Text = 'seoul';
  
  type Num = number;
  
  type Student = {  // 원시Type 뿐만아니라 Object 타입도 가능
    name: string;
    age: number;
  };
  const student: Student = {
    // animal: 'dog' // 에러가남
    name: 'piggy',
    age: 12,
  }

  /**
   * String Literal Types  : 타입을 문자열로 지정할 수 있음
   */
  type Name = 'name';
  let piggyName: Name;
  // piggyName = 'aa' // 오류남
  piggyName = 'name'; // 이렇게만 할당할 수 있음
  
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  // const isCat: Boal = false; // 에러남


}