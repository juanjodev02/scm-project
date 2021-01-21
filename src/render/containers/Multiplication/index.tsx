import React, {FC, useState} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import {InputNumber} from "antd";

const Multiplication: FC = () => {
    const [multiplication, setMultiplication] = useState<number>(0);

    return (
        <div>
            <ContainerHeader title='Multiplicación' />
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} />
            <span style={{fontSize: 25}}> x </span>
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} />
            <span style={{fontSize: 25}}> = {multiplication}</span>
        </div>
    );
};

export default  Multiplication;
