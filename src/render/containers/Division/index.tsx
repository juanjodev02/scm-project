import React, {FC} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import {InputNumber, Typography} from "antd";
import useCalcOperation from "../../hooks/useCalcOperation";
import Controller from "./controller";

const Division: FC = () => {
    const {response, error, setValue} = useCalcOperation<Controller>(new Controller());

    return (
        <div>
            <ContainerHeader title='División' />
            <InputNumber size="large" onChange={(e) => setValue(e, 'a')}/>
            <span style={{fontSize: 25}}> ÷ </span>
            <InputNumber size="large" onChange={(e) => setValue(e, 'b')} />
            <span style={{fontSize: 25}}> = {response}</span>
            {
                error && <div>
                    <Typography.Text type="danger">No se puede dividir para cero!</Typography.Text>
                </div>
            }
        </div>
    );
};

export default  Division;
