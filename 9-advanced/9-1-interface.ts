type PositionType = {
    x: number;
    y: number;
};
interface PositionInterface {
    x: number;
    y: number;
}
// interface는 따로 구현하는 부분이 있을 때, type은 따로 구현하는 목적이 아닌 데이터를 담는 목적으로 사용할 때

// object ⭐️
const obj1: PositionType = {
    x: 1,
    y: 1,
};
const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1, // 인터페이스는 따로 정의해도 자동으로 결합된다. 타입은 불가능.
};

// class ⭐️
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends: 기존 인터페이스는 확장을 통해 확장 가능. 타입도 &로 묶어 확장 가능 
interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & { z: number }; // 타입스크립트 초창기에는 타입을 확장하는 것이 불가능했었다.

// 인터페이스만 따로 써도 결합이 된다. Only interfaces can be merged.
interface PositionInterface {
    z: number;
}
// type PositionType { // 중복되는 타입은 에러 발생
// }

// Type aliases는 computed properties를 사용할 수 있다.
type Person = {
    name: string,
    age: number,
}
type Name = Person['name']; // string

type NumberType = number; // 새로운 타입을 만들 수 있다.
type Direction = 'left' | 'right' // uion타입을 만들 수 있다. 인터페이스는 불가.

// 초창기에는 타입과 인터페이스가 매우 달랐으나 점점 비슷해지고 있다.
// 인터페이스: 어떤 것의 규격사항. 다른 사람 간 의사소통할 때, 오브젝트 간 의사소통할 때 정해진 인터페이스를 토대로 서로 상호작용. API는 계약서와 같다.
// 인터페이스를 사용함으로써 구현하는 사람이 동일한 규격사항을 따른다. 규격을 정의하고 규격을 통해 구현되는 경우 타입이 아닌 인터페이스를 사용해야한다. 구현해야하는 것이 있을 때는 인터페이스를 사용.
// 타입: 어떤 데이터를 담을 수 있는지 데이터의 모습을 결정하는 것. 데이터를 묘사하는 경우는 타입을 사용한다.