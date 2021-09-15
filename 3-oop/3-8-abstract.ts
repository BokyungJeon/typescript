{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker { // abstract가 붙으면 클래스 자체 오브젝트는 만들 수 없다.
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        // abstract가 붙으면 클래스 자체 오브젝트는 만들 수 없다.
        // static makeMachine(coffeeBeans: number): CoffeeMachine {
        //     return new CoffeeMachine(coffeeBeans);
        // }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...🧼')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...🔥')
        }

        // 자식미 행동이 달라지는 함수 앞에 abstract을 붙여 자식클래스마다 다르게 구현을한다.
        // 자식이 접근해야하므로 protected
        protected abstract extract(shots: number): CoffeeCup ;
        // {
           // abstract함수는 추상적이어야하므로 구체적 사항을 작성하면 안된다.
            // console.log(`Pulling ${shots} shots...☕️`)
            // return {
            //     shots,
            //     hasMilk: false
            // }
        // }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CafeLatteeMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some Milk...🥛')
        }
        // // overwriting
        // makeCoffee(shots: number): CoffeeCup {
        //     // const coffee = super.makeCoffee(shots);
        //     // super를 호출하지 않는 실수를 하면 부모 클래스의 절차를 놓칠 수 있다.
        //     // 이를 안전하게 하기위해 abstract클래스를 활용한다.
        //     this.steamMilk();
        //     return {
        //         ...coffee,
        //         hasMilk: true,
        //     }
        // }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {shots, hasMilk: true};
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {shots, hasSugar: true};
        }
    }

    const machines: CoffeeMachine[] = [
        // new CoffeeMachine(16),
        new CafeLatteeMachine(16, '1'),
        new SweetCoffeeMaker(16),
        // new CoffeeMachine(16),
        new CafeLatteeMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]
    machines.forEach(machine => {
        console.log('-------------------------')
        machine.makeCoffee(1);
    })
}
