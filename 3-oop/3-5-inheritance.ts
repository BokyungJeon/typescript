{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
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
            console.log('cleaning the machine...π§Ό')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...π₯')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...βοΈ`)
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

    class CafeLatteeMachine extends CoffeeMachine {
        // μμ ν΄λμ€μμ λ°λ‘ μμ±μλ₯Ό κ΅¬ννλ €λ©΄ κΌ­ super()λ‘ λΆλͺ¨μ μμ±μλ₯Ό νΈμΆνκ³  λΆλͺ¨ν΄λμ€μμ νμν λ°μ΄ν°λ λ°μμ μ λ¬ν΄μ€μΌ νλ€.
        constructor(beans: number, public readonly serialNumber: string) { // public readonly
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some Milk...π₯')
        }
        // overwriting
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CafeLatteeMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee)
    console.log(latteMachine.serialNumber);
}
