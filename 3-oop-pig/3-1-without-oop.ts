{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };


  const BEANS_GRAMM_PER_SHOT: number = 7; // 이런 primitive type 에서는 타입을 적지 않아도 되긴함
  let coffeeBeans: number = 55;
  
  function makeCoffee(shots: number): CoffeeCup {
    if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!')
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots, // key와 value가 동일하므로 생략! es6
      hasMilk: false,
    };
  }

  const coffee = makeCoffee(3);
  console.log(coffee);
  
}