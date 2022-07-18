export class Negotiation {
    constructor(
        private _date: Date, 
        public readonly amount: number, 
        public readonly value: number
    ) {}

    get volume(): number {
        return this.amount * this.value;
    }

    get data(): Date {
        const data = new Date(this._date.getTime());
        return data;
    }
}