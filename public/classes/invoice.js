export class Invoice {
    // client: string
    // amount: number
    // details: string
    constructor(
    // this.client = c
    // this.details = d
    // this.amount = a
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} amount for ${this.details}`;
    }
}
