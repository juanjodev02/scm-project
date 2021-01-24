import Operation from "../../IOperation";

export default class Subtraction implements Operation{
    exec(numero1: number, numero2: number): number {
        return numero1 - numero2;
    }
}
