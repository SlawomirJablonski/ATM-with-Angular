export class AccountNumber {
    private constructor(
        private value: string
    ) {}

    static from(value: string){
        if(value.length !==26){
            throw new Error('Inproper account number length!');
        }
        return new AccountNumber(value)
    }

    get valueOf(){
        return this.value
    }
}