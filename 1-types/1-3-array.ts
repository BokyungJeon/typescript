{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4]; // 두 방식 다 가능하지만
  function printArray(fruits: readonly string[]) { // readonly는 string[]으로 사용해야함. fruits배열 변경 불가

  }

  // Tuple  []배열모양이지만 안에 다른 타입. 서로 다른 타입의 데이터를 담을 수 있다. 권장하지않음(가독성) 클래스나 오브젝트 형태로 명시해서 사용가능
  // 튜플 대신 -> interface, type alias, class로 대체해서 사용
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  // 튜플 사용되는 예시: 리액트의 useState를 이용하면 튜플형태로 리턴됨
  // const [count, setCount] = useState(0);
  
  // 동적으로 다른 타입 데이터를 묶어서 리턴하는데 클래스나 타입앨리어스나 인터페이스로 묶어 사용하기 애매한 경우 튜플 사용. 웬만하면 쓰지말자.
}
