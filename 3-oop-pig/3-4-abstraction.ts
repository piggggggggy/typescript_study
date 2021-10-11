{
  // 추상화 
  // : 인터페이스를 간단하고 심플하게 만듬
  // 사용하는 사람이 많은 생각을 하지 않도록

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };


  // interface : 미리 정의해놓는 규약, 계약서 같은 것
  interface CoffeeMaker { // 인터페이스 명앞에 I라는 prefix를 붙이거나 class명 뒤에 Impl이라고 붙이기도함 (엘리님은 후자)
    makeCoffee(shots: number): CoffeeCup;
  }
  
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker { // 위의 인터페이스를 따라간다고 명시해줘야 함=> interface를 구현하겠다는 뜻
                                               // => interface에서 규약된 모든 함수를 구현해야함
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error('value for beans should be greater than 0')
      }
      this.coffeeBeans += beans;
    }
    
    clean() {
      console.log('cleanig the machine..')
    }

    // 셋다 private를 지정해서 추상화!
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
       this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log('heating up...💕')
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`)
      return {
        shots,
        hasMilk: false,
      }
    }


    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots)
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(3);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32); // 이렇게 타입을 지정해도 위의 CoffeeMachin 타입과 같으나 
                                                             // 위의 인터페이스에서 지정해놓지 않은 fillCoffeeBeans는 사용할 수 없음
  // maker2.fillCoffeeBeans(32);  // interface를 활용하면 내가 얼만큼의 함수를 쓸 것인지 설정할 수 있음
  maker2.makeCoffee(3);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(42);
  maker3.makeCoffee(3);
  maker.clean();
}