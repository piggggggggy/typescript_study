{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // BEANS_GRAMM_PER_SHOT: number = 7; 이렇게하면 오브젝트를 만들때마다 생성이되므로 낭비
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level 이렇게 해주면 클래스와 연결이 되어있어서 오브젝트마다 만들어지지 않음, this말고 클래스명.으로 사용
    coffeeBeans: number = 0; // instance (object) level

    // class를 이용해서 object를 만들 때 가장 먼저 호출되는 함수
    constructor(beans: number) { // constructor의 인자로 원하는 것을 넣어줄 수 있ㅇ므
      this.coffeeBeans = beans;
    }

    // static은 변수 뿐만아니라 함수에서도 사용가능
    // constructor를 사용하지 않고 새로운 커피머신을 만들고 싶다?
    // 어떠한 변수값도 필요하지 않기 때문에 static을 붙여줄거
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // 외부에서도 새로운 오브젝트를 만들지 않고 불러올 수 있음
    
    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots, // key와 value가 동일하므로 생략! es6
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(55); // new는 이 class의 인스턴스를 만드는 것
                                   // ()는 생성자를 호출하는 것

  const maker2 = CoffeeMaker.makeMachine(14); // static의 힘, static이 없다면 만들어진 변수 안에서 makemachine을 호출해야함
                                              // ex) maker.makeMachine
  // static이 없으면 클래스레벨의 함수를 이용할 수 없고 만들어진 오브젝트안에서 호출해야함
  
}