import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/LIstTemplate.js';
import { Payments } from './classes/Payment.js';
// let docOne: HasFormatter
// let docTwo: HasFormatter
// docOne = new Invoice('john', 'play more', 300)
// docTwo = new Payments('Harry', 'play n swim', 300)
// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
// const invOne = new Invoice('ujol', 'for play', 900)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// console.log(invoices)
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(type.value, toForm.value, details.value, amount.valueAsNumber)
    let values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, 'end');
});
