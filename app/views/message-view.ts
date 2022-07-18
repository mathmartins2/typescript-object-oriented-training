import { Negotiations } from '../models/negotiations.js';
export class MessageView {

    private element: HTMLTableElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(model: Negotiations): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

    update(model: Negotiations): void {
        const template = this.template(model);
        this.element.innerHTML = template; 
    }
}