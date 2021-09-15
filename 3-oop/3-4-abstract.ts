{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

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

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕️`)
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // // CoffeeMachine.makeMachine()함수를 이용하면 CoffeeMachine오브젝트로 return값 반환
    // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    // // CoffeeMachine타입으로 publick 오브젝트에 다 접근 가능
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(2);

    // // interface로 타입을 제한해서 받으면 interface에 정의된 것들만 사용 가능
    // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32);
    // maker2.makeCoffee(2);
    // maker2.clean();

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {
        }
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker3);
    const pro = new ProBarista(maker3);
    // amateur.makeCoffee();
    pro.makeCoffee();
}
