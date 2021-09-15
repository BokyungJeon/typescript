{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public : 기본. 외부에서 다 보고 접근할 수 있음
    // private : 클래스 외부에서 볼 수도 접근할 수도 없음
    // protected : 외부에서는 접근할 수 없지만 이 클래스를 상속한 자식클래스에서는 접근할 수 있음
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) { // 생성자(constructor)를 직접 써서 생성하는 것을 금지하기 위해 private
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker { // 생성자를 직접 쓰는 대신 static을 붙인 함수로 생성자 오브젝트를 만든다.
            return new CoffeeMaker(coffeeBeans);
        }

        // public
        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) { // static변수는 class level이므로 this대신 클래스이름을 쓴다.
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots, // shots: shots // key = value 동일하면 생략 가능
                hasMilk: false
            }
        }
    }

    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -34; // invalid
    maker.fillCoffeeBeans(32);

    class User {
        // private firstName: string; // 멤버변수에 일일이 private지정하고 생정자에 또 쓰는 대신 constructor에 private 지정해준다
        // private lastName: string;
        // getter, setter는 일반 멤버변수처럼 사용 가능, 어떤 계산을 해야할 때 유용하게 사용
        get fullName(): string { // getter작성은 함수처럼 get 변수명() {}
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number { // getter는 읽기전용
            return this.internalAge;
        }
        set age(num: number) { // setter는 쓰기전용
            if(num < 0) {
                // 유효성 검사 가능
            }
            this.internalAge = num;
        }
        constructor(private firstName: string, public lastName: string) {
            // this.firstName = firstName;
            // this.lastName = lastName;
        }
    }
    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName); // 접근할 때는 멤버변수에 접근하는 것과 같이 작성
    // user.firstName = 'Ellie';
    console.log(user.fullName);
}