{
    function checkNotNullBad(arg: number | null): number { // 숫자만 확인할 수 있어서 Bad
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    function checkNotNullAnyBad(arg: any | null): any{ // 리턴값의 타입이 보장되지 않음(타입 정보가 없어짐)
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNullAnyBad(123);

    function checkNotNull<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}