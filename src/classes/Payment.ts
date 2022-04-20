import { HasFormatter } from '../interfaces/hasformatter'

export class Payments {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} owed ${this.amount} amount for ${this.details}`
  }
}
