import Operation from "../../IOperation";
export default class Division implements Operation{
    exec(dividend: number, divisor: number): number {
        if (divisor === 0) {
            throw new Error('Divisor cannot be zero')
        }
        return dividend / divisor;
    }
}
