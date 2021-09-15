{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // 클래스란 관련된 속성과 함수를 한 곳에 묶어 어떤 모양의 데이터가 될 것이라고 정의하는 것
    class CoffeeMaker {
        // 공유되는 것(변수, 합수)은 static을 사용해 class level로 만들고, 오브젝트마다 만들어져야 하는 변수는 멤버변수르 만든다.
        static BEANS_GRAM_PER_SHOT: number = 7; // class level의 메모리에 할당됨. 클래스와 연결되어 있기 때문에(클래스에 한 번만 저장) 오브젝트를 만들때마다 생성되지 않는다.
        coffeeBeans: number = 0; // instance(object) level:

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        makeMachine(coffeeBeans: number): CoffeeMaker { // static을 붙일 수도 있다
            return new CoffeeMaker(coffeeBeans);
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

    const maker = new CoffeeMaker(32);
    console.log(maker); // 만들어진 오브젝트 안에는 static변수가 포함되지 않는다.
    const maker2 = new CoffeeMaker(16);
    maker2.makeMachine(3)
    console.log(maker2);

    // CoffeeMaker.makeMachine(3); // static이 붙어 있을 때
    Math.abs // Math안에 있는 것들은 클래스 레벨(static)이므로 const math = new Math() 없이 호출 가능
    Math.PI
}