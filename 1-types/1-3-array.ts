{
  // Array : 두가지 방식이 있음
  const fruits: string[] = ['사과', '바나나'];
  const scores: Array<number> = [1, 3, 4];
                                                  // 일관성있게 코드를 작성하기 위해 아래 방법으로 작성하는 것이 좋음 
                                                  // object의 일관성을 유지하는 것은 매우 중요하기 때문
  function printArray(fruits: readonly string[]) { // readonly 를 사용하면 fruits 는 절대 변경할 수 없고 읽는 것만 가능해짐
    // fruits.push() // error 발생
  }

  // Tuple  : 서로 다른 Type의 데이터를 담을 수 있음
  let student: [string, number] ;
  student = ['name', 23]
  student[0]  // 'name'
  student[1]  // 23
  // Tuple을 사용하는 것이 권장되지 않음
  // 위처럼 index로 접근하는 것이 가독성이 떨어짐
  // --> interface, type alias, class 등으로 대체해서 사용하면 좋음
  
  // Object 형식을 사용하면 가독성이 좋음
  // 이를 해결하는 방법은 
  const [name, age] = student; // Object Destructuring 을 활용하면 가독성을 높일 수 있다!!
  // 원하는 변수를 선언해 student를 할당

}