import React, {FC, useState} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import {InputNumber} from "antd";

const Subtraction: FC = () => {
    const [subtraction, setSubtraction] = useState<number>(0);

    return (
        <div>
            <ContainerHeader title='Resta' />
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} />
            <span style={{fontSize: 25}}> - </span>
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} />
            <span style={{fontSize: 25}}> = {subtraction}</span>
        </div>
    );
};

export default  Subtraction;
