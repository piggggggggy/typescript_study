{
  /**
   * Enum  여러가지에 관련된 상수값을 한군데 모으는 것
   */

  // JavaScript  자바스크립트에서 상수를 만들 때 (주로 모두 대문자 사용)
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript 사실 type에서는 enum을 가능한 사용하지 않는 것이 좋음
  enum Days { // 값을 정하지 않으면 자동으로 index를 할당해줌
    Monday = 1,  // 값을 지정해주면 지정해준 값부터 시작
    Tuesday = 'tuesday', // 문자열을 할당하면 전부다 할당해줘야 함
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
  }
  console.log(Days.Thursday);
  let day: Days = Days.Saturday; // enum으로 정희된 변수에 다른 값이 할당될 수 있어 문제가 있다.
  day = Days.Tuesday;
  day = 6;
  console.log(day);
  // 사용하지 않는 것이 좋음

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'wednesday'; // 차라리 이런식으로 Union을 활용하는 것이 좋음
  let dayOfweek: DaysOfWeek = 'Monday';
  // dayOfweek = 'piggy'; // enum과 다르게 다른 값 할당이 불가능
  dayOfweek = 'Tuesday'; 
  
}