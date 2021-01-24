import Operation from "../../IOperation";

export default class Multiplication implements Operation{
    exec(num1: number, num2: number): number {
        return num1 * num2;
    }
}
