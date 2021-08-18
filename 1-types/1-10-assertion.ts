{
  /**
   * Type Assertion 🤮  타입을 강요할 때
   */
  function jsStrFunc(): any {
    return 'hello'
  }
  const result = jsStrFunc();
  // result.length // result가 문자열이 아니고 any라서 함수를 사용할 수 없음
  // 이때 result가 문자열인 것을 확신할 수 있을 때 
  // Type Assertion 을 사용함

  console.log((result as string).length); // 5
  console.log((<string>result).length); // 변형
  // 하지만 이때 위 함수의 return 이 2로 바뀌어도 현재상황에서 출력시키기 전에는 오류가 발생하지 않음
  // 이래서 반드시 string이라는 것을 확신할 수 있을 때만 assertion을 사용하는 것

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // 🤮 => 출력시 에러발생!! wrong에 push를 사용할 수 없다고 type에러 발생!

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // 🤮
  numbers!.push(2); // 🤮 확신할때 !를 붙임 => 무조건 null이 아니야! 무조건 undefined이 될 수 없어!

  // ex
  const button = document.querySelector('class')!; // 정말 100% 장담할 수 있을 때 뒤에 !를 붙여줌
  if (button) { // 그렇지 않을 경우엔 이렇게 막아줌, null 일수도 있기 때문   
    button.nodeValue;
  }


}