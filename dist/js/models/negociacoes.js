export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    adiciona(negotiation) {
        this.negotiations.push(negotiation);
    }
    lista() {
        return this.negotiations;
    }
}
