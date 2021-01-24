import React, {FC, useEffect, useState} from 'react';
import ContainerHeader from "../../components/ContainerHeader";
import {InputNumber} from "antd";
import useCalcOperation from "../../hooks/useCalcOperation";
import Controller from './controller';

const Multiplication: FC = () => {
    const {response, setValue} = useCalcOperation<Controller>(new Controller());

    return (
        <div>
            <ContainerHeader title='Multiplicación' />
            <InputNumber size="large" onChange={(e) => setValue(e, 'a')}/>
            <span style={{fontSize: 25}}> x </span>
            <InputNumber size="large" onChange={(e) => setValue(e, 'b')} />
            <span style={{fontSize: 25}}> = {response}</span>
        </div>
    );
};

export default  Multiplication;
