import React, { FC } from 'react';
import Menu from '../../components/Menu';
import { Row, Col } from 'antd';
import {MenuClickEventHandler} from "rc-menu/lib/interface";


import './index.css';

export interface LayoutProps {
    children: React.ReactNode,
    menuOption: string,
    handleClick: MenuClickEventHandler
}

const Layout : FC<LayoutProps> = ({ children, menuOption, handleClick }: LayoutProps) => {
    return (
        <div className='Layout'>
            <Menu menuOption={menuOption} handleClick={handleClick}/>
            <div className="Layout-content">
                { children }
            </div>
        </div>
    );
}

export default Layout;
