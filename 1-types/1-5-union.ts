{
  /**
   * Union Types : OR 
   * 모든 가능한 case 중에 발생할 수 있는 하나를 담을 수 있는 것을 만들때
   * 활용도가 매우 높음
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down') // 자동으로 완성된 타입을 고를 수 있음
 
  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail 😰
  type SuccessState = {
    response: {
      body: string;   
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return{
      response: {
        body: 'logged in',
      }
    }
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 🤮 reason
  function printLoginState(state: LoginState): void {
    if ('response' in state) { // 좋지 않은 방법
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`🤮 ${state.reason}`);
    }
  }

}