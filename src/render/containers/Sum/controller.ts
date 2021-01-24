import Operation from "../../IOperation";

export default class Sum implements Operation{
    exec(num1: number, num2: number ):number{
        return num1+num2
    }
}
