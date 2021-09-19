interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee{
    pay() {
        console.log(`part time!!`);
    }
    workPartTiem() {

    }
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employee: Employee): Employee{ // 리턴값이 세부 클래스의 정보를 잃어버리게된다.
    employee.pay();
    return employee;
}

// 제네릭에 범위를 제한할 수 있다.
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTiem();

const ellieAfterPay = payBad(ellie); // as FullTimeEmployee 로 캐스팅하는건 좋지 않으므로 제네릭을 이용한다.
const bobAfterPay = payBad(bob);
ellieAfterPay.pay() // pay밖에 안됨

const obj = {
    name: 'ellie',
    age: 20,
};

const obj2 = {
    animal: '🐶'
}

console.log(getValue(obj, 'name')); // eliie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐶

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}