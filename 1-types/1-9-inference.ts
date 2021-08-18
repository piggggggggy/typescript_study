{
  /**
   * Type Inference  타입 추론, 타입을 자동으로 결정되는 경우
   */
  let text = 'hello'; // 선언과 동시에 문자열을 할당했기 때문에 type을 알아서 추론함
  text = 'hi';
  // text = 1; // 대신 문자열이 아닌 다른 type은 안된다.

  function print(message = 'hello') { // type을 명시하지 않으면 자동으로 any가 할당되므로 type을 지정해줘야함
    console.log(message);
  }
  print('hello');
  // print(1); // 문자열을 default로 줬기 때문에 숫자 type 을 받지 못함

  function add(x: number, y: number) { // return type을 지정해주지 않아도 알아서 추론가능한 정도
    return x + y; 
  }
  const result = add(1, 2); // result에 따로 type을 지정해주지 않았지만 위에 의해 알아서 number로 지정됨 
  // typescript에서도 꼬박꼬박 type을 지정하지 않아도 됨
  // 하지만 이건 간단해서 그렇고 프로젝트에서는 그렇지 않기 때문에
  // 웬만하면 type을 지정해주는 방식이 좋음...
  // 특히 원시 type은 괜찮지만 함수에서는 type을 지정해주는 것이 좋다.

  // 팀에서 rule을 정하는 것이 좋음
}