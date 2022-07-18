import { Negotiation } from '../models/negotiation.js';
import { Negotiations } from '../models/negotiations.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negotiation = this.criaNegociacao();
        negotiation.data.setDate(12);
        this.negotiations.adiciona(negotiation);
        console.log(this.negotiations.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negotiation(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
