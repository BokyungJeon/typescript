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
    z: 1,
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

// Extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & { z: number }; // 타입스크립트 초창기에는 타입을 확장하는 것이 불가능했었다.

// 인터페이스만 결합이 된다. Only interfaces can be merged.
interface PositionInterface {
    z: number;
}
// type PositionType {
// }

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right'