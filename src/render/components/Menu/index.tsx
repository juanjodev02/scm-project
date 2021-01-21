import React, { FC } from 'react';
import { Menu as AntdMenu } from 'antd';
import {
    PlusOutlined,
    MinusOutlined,
    CloseOutlined,
    FunctionOutlined,
    PercentageOutlined
} from '@ant-design/icons';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

export interface MenuProps {
    menuOption: string,
    handleClick: MenuClickEventHandler
}

const Menu : FC<MenuProps> = ({ menuOption = '1', handleClick }: MenuProps) => {

    return (
        <AntdMenu
            onClick = {handleClick}
            style={{ width: 200}}
            defaultSelectedKeys={[menuOption]}
            mode="inline"
        >
            <AntdMenu.ItemGroup>
                <AntdMenu.Item key='1' icon={<PlusOutlined />}>Suma</AntdMenu.Item>
                <AntdMenu.Item key='2' icon={<MinusOutlined />}>Resta</AntdMenu.Item>
                <AntdMenu.Item key='3' icon={<CloseOutlined />}>Multiplicación</AntdMenu.Item>
                <AntdMenu.Item key='4' icon={<PercentageOutlined />}>División</AntdMenu.Item>
                <AntdMenu.Item key='5' icon={<FunctionOutlined />}>Potencia</AntdMenu.Item>
            </AntdMenu.ItemGroup>
        </AntdMenu>
    );
}

export default Menu;
