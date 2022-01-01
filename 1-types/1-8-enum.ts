{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ 'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript - enum 으로 관련된 상수값을 묶어서 사용할 수 있다. 타입스크립트에서는 가능한 사용하지 않는 것이 좋다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; // 타입보장을 위해 enum대신 union타입 사용 권장. 거의 모든 enum은 union으로 대체 가능.
  enum Days { 
    Monday = 1, // 지정하지않으면 0부터 시작. 숫자도 할당가능-하나하나 지정해줘야함
    Tuesday, // 2
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday; 
  day = 10; // 타입스크립트는 다른 언어와 달리 enum을 할당한 후에 다른 숫자를 다시 할당해도 에러없이 작동하므로 타입이 보장되지 않는다. 
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
