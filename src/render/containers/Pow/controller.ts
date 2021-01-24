import Operation from "../../IOperation";

export default class Pow implements Operation{
    exec(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }
}
