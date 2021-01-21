import React, {FC, useState} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import { InputNumber, Typography} from "antd";

const Pow: FC = () => {
    const [pow, setPow] = useState<number>(0);

    return (
        <div>
            <ContainerHeader title='Potencia' />
            <Typography.Text strong>Base</Typography.Text><br/>
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} /><br/>
            <Typography.Text strong>Exponente</Typography.Text><br/>
            <InputNumber size="large" min={1} max={100000} defaultValue={0} onChange={() => console.log('change')} /><br/>
            <Typography.Text strong>Respuesta</Typography.Text><br/>
            <span style={{fontSize: 25}}>{pow}</span>
        </div>
    );
};

export default  Pow;
