import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
import { NegotiationView } from '../views/negociation-view.js';
import { MessageView } from '../views/message-view.js';

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inpuAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationView('#negociacoesView');
    private messageView = new MessageView('#mensagemView');

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inpuAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsView.update(this.negotiations);
    }

    add(): void {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.cleanForm();
    }

    createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inpuAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }

    cleanForm(): void {
        this.inputDate.value = '';
        this.inpuAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
