{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보를 은닉 (다양한 레벨)
  // public
  // private
  // protected : 상속할 때 외부에서는 접근할 수 없지만 상속한 자식클래스에서는 접근가능한 상태
  // 작성하지 않으면 기본적으로 public임 => 작성할 필요 없음
  // 캡슐화를 할 때는 외부에서 접근할 수 있는 것이 무엇인지 내부에서만 가지고 있어야할 것이 무엇인지 결정
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    // 외부에서 접근하면 안되는 값이므로 private설정 => 외부에서 지정할 수 없음
    private coffeeBeans: number = 0; // 여기도
    // 상태는 private로 숨겨놓고 fillCoffeeBeans함수를 만들어 변경할 수 있도록 했음

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } // static => 누군가가 생성자이용해서 생성하는 것을 금지하기 위해 쓰는거임, 
    // 그래서 이럴 경우에는 constructor를 private으로 만들어서 항상 static메소드를 이용할 수 있도록 권장하는 것이 좋음

    // coffeeBeans를 설정해주는함수 만들기
    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.coffeeBeans += beans;
    } // => 안정성 올라감
    
    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots, 
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32);
  // => constructor를 private로
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -3;  // invalid
  // 외부에서 유효하지 않은 상황을 만들 수 있는 문제가 있음
  // 막아줘야함

  // 변경 후
  maker.fillCoffeeBeans(5);


  // Getter와 Setter
  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`
    }
  }

  const user = new User('Steve', 'Jobs');
  user.firstName = 'Ellie';
  // => 이렇게 바꿔도 여전히 Steve Jobs가 출력됩

  // 이렇게 바꿔서 Getter를 이런상황에 유용하게 쓸 수 있음

  class _User {
    firstName: string;
    lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user2 = new _User('Steve', 'Jobs');
  user2.firstName = 'Ellie';
  // => Ellie Jobs

  // 외부에서 설정할 수 없게 만들 땐, 앞서 배운 것 처럼 private를 해줄 수 있는데
  class __User {
    private firstName: string;
    private lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  // 이 때, 간단하게 만들 수 있음
  class ___User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    // 추가적으로
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if(num < 0) {
        throw new Error('age...')
      }
      this.internalAge = num;
    } // 외부에서 설정 (.internalAge로는 접근할 수 없지만 .age로 접근가능)


    constructor(private firstName: string, private lastName: string) {
    } // 생성자에 접근제어자를 설정해주면 바로 변수로 설정이 됨
  } // 위의 __User 코드와 동일함


}