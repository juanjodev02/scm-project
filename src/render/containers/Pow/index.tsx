import React, {FC} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import { InputNumber, Typography} from "antd";
import useCalcOperation from "../../hooks/useCalcOperation";
import Controller from "./controller";

const Pow: FC = () => {
    const {response, setValue} = useCalcOperation<Controller>(new Controller());

    return (
        <div>
            <ContainerHeader title='Potencia' />
            <Typography.Text strong>Base</Typography.Text><br/>
            <InputNumber size="large" onChange={(e) => setValue(e, 'a')} /><br/>
            <Typography.Text strong>Exponente</Typography.Text><br/>
            <InputNumber size="large" onChange={(e) => setValue(e, 'b')} /><br/>
            <Typography.Text strong>Respuesta</Typography.Text><br/>
            <span style={{fontSize: 25}}>{response}</span>
        </div>
    );
};

export default  Pow;
