import React, {FC, useState} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import {InputNumber} from "antd";

const Division: FC = () => {
    const [division, setDivision] = useState<number>(0);

    return (
        <div>
            <ContainerHeader title='División' />
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} />
            <span style={{fontSize: 25}}> ÷ </span>
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} />
            <span style={{fontSize: 25}}> = {division}</span>
        </div>
    );
};

export default  Division;
