import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputDate = document.querySelector('#data');
        this.inpuAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negotiation = this.createNegotiation();
        negotiation.data.setDate(12);
        this.negotiations.add(negotiation);
        console.log(this.negotiations.list());
        this.cleanForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inpuAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inpuAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
