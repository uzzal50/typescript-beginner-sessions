import { HasFormatter } from '../interfaces/hasformatter'

export class Invoice implements HasFormatter {
  // client: string
  // amount: number
  // details: string

  constructor(
    // this.client = c
    // this.details = d
    // this.amount = a
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes ${this.amount} amount for ${this.details}`
  }
}
