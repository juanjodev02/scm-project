import {useEffect, useState} from "react";
import Operation, { OperationArgs } from "../IOperation";
import numberValidator from "../utils/numberValidator";

const useCalcOperation = <T extends Operation> (controller: T) => {
    const [operationValues, setOperationValues] = useState<OperationArgs>({
        a: 0,
        b:0,
    });

    const [response, setResponse] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            const value = controller.exec(operationValues.a, operationValues.b);
            setResponse(value);
            setError(null)
        } catch (e) {
            setError(e.message);
        }
    } , [operationValues])

    function setValue (value: number | string | undefined | null, type: string) {
        if (numberValidator(value) === true)  {
            if (type === 'a') {
                setOperationValues({... operationValues, a: value as number})
            }
            if (type === 'b') {
                setOperationValues({... operationValues, b: value as number})
            }
        }
    }

    return {response, error, setValue};
}

export default useCalcOperation;
