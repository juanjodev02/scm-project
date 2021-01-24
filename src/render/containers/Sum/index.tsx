import React, { FC } from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import { InputNumber } from 'antd';
import useCalcOperation from "../../hooks/useCalcOperation";
import Controller from "./controller";

const Sum: FC = () => {
    const {response, setValue} = useCalcOperation<Controller>(new Controller());

    return(
        <div>
            <ContainerHeader title='Suma' />
            <InputNumber size="large" onChange={(e) => setValue(e, 'a')} />
            <span style={{fontSize: 25}}> + </span>
            <InputNumber size="large" onChange={(e) => setValue(e, 'b')} />
            <span style={{fontSize: 25}}> = {response}</span>
        </div>
    );
}

export default Sum;
