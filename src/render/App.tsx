import React, { useState, FC } from 'react';
import { hot } from 'react-hot-loader';
import Layout from "./containers/Layout/Layout";
import {MenuClickEventHandler} from "rc-menu/lib/interface";
import Sum from "./containers/Sum";
import Subtraction from "./containers/Subtraction";
import Multiplication from "./containers/Multiplication";
import Division from "./containers/Division";
import Pow from './containers/Pow';

const App = () => {
    const [menuOption, setMenuOption]  = useState<string>('1');

    const handleClick: MenuClickEventHandler = (e) => {
        setMenuOption(e.key.toString());
    };

    const switchScreen = (id: string): any => {
        switch(id) {
            case '1':
                return <Sum />;
            case '2':
                return <Subtraction />;
            case '3':
                return <Multiplication />;
            case '4':
                return <Division />;
            case '5':
                return <Pow />;
        }
    }

    return (
        <>
            <div className="draggableZone" />
            <Layout menuOption={menuOption} handleClick={handleClick}>
                {
                    switchScreen(menuOption)
                }
            </Layout>
        </>
    )
};

export default hot(module)(App);
