export default class {
    static exec(dividend: number, divisor: number): number {
        if (divisor === 0) {
            throw new Error('Divisor cannot be zero')
        }
        return dividend / divisor;
    }
}
