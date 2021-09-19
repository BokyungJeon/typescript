// https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
Array;
[1,2].map;

type Student = {
    passed: boolean;
};
const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }]
const result = students.every(student => student.passed );
console.log(result);

//사용자 정의 타입가드는 {parameter} is {Type}형식으로 어떠한 인자명은 어떠한 타입이다라는 것을 명시해주는 역할을 한다.
// function isFish(pet: Fish | Bird): pet is Fish { // pet에는 fish 혹은 bird가 들어올 수 있는데, 파라미터 pet의 반환 타입은 Fish라고 명시.
//     return (pet as Fish).swim !== undefined; // pet을 Fish라고 쳤을 때(as로 강제 캐스팅) .swim이 있으면 true로 반환하므로 이를 통해 Fish타입인지 확인할 수 있다.
// }
// let pet = getSmallPet();
// if (isFish(pet)) {
//     pet.swim();
// } else {
//     pet.fly();
// }

class Animal {}
class Cat extends Animal {
    isCat: boolean = true;
}
class Dog extends Animal {
    isDog: boolean = false;
    // isCag: boolean = true;
}
// const animals: Animal[] = [new Cat(), new Cat(), new Dog()]; // Class Dog에 isCat이 없으므로 false
const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
// function isCat은 Cat타입을 반환하므로(: animal is Cat) every<Cat>.
// every<Cat>(isCat)은 배열을 하나씩 돌며 클래스를 Cat으로 캐스팅하고 Cat.isCat 변수가 없으면 false를 반환하므로 Cat이 아닌 것이 있는지 체크 가능하다.