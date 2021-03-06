{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
            this.coffeeBeans = coffeeBeans;
        }

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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Steaming some Milk...🥛') // 복잡한 함수 가정
        }
        makeMilk(cup: CoffeeCup): CoffeeCup  {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Fancy Steaming some Milk...🥛') // 복잡한 함수 가정
        }
        makeMilk(cup: CoffeeCup): CoffeeCup  {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Steaming some Milk...🥛') // 복잡한 함수 가정
        }
        makeMilk(cup: CoffeeCup): CoffeeCup  {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // 설탕 제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from candy 🍭') // 복잡한 함수 가정
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from jar!!!') // 복잡한 함수 가정
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // class CafeLatteMachine extends CoffeeMachine {
    //     constructor(beans: number, public readonly serialNumber: string, private milkFrother: MilkFrother) {
    //         super(beans);
    //     }
    //     // private steamMilk(): void {
    //     //     console.log('Steaming some Milk...🥛')
    //     // }
    //     // overwriting
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         // this.steamMilk();
    //         // return {
    //         //     ...coffee,
    //         //     hasMilk: true,
    //         // }
    //         return this.milkFrother.makeMilk(coffee);
    //     }
    // }
    // class SweetCoffeeMaker extends CoffeeMachine {
    //     constructor(beans:number, private sugar: SugarProvider) {
    //         super(beans);
    //     }
    //     // getSugar() {
    //     //     console.log('Getting some sugar 🍬');
    //     // }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         // this.getSugar();
    //         // return {
    //         //     ...coffee,
    //         //     hasSugar: true
    //         // };
    //         return this.sugar.addSugar(coffee);
    //     }
    // }
    // class SweetCaffeeLatteeMachine extends CoffeeMachine {
    //     constructor(private beans: number, private milk: MilkFrother, private sugar: SugarProvider) {
    //         super(beans);
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         const sugarAdded = this.sugar.addSugar(coffee)
    //         return this.milk.makeMilk(sugarAdded);
    //     }
    // }

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //
    // const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
    // const sweetMachine = new SweetCoffeeMaker(12, sugar);
    // const latteMachine = new CafeLatteMachine(12, 'ss', cheapMilkMaker);
    // const coldLatteMachine = new CafeLatteMachine(12, 'ss', coldMilkMaker);
    // const sweetLatteMachine = new SweetCaffeeLatteeMachine(12, cheapMilkMaker, candyS
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
