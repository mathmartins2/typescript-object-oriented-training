import { NegotiationController } from './controllers/negotiation-controller.js';
import { NegociationView } from './views/negociation-view.js';
const controller = new NegotiationController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});
const negotiationsView = new NegociationView;
const template = negotiationsView.template();
console.log(template);
