import React, { FC } from 'react';
import { Typography, Divider } from 'antd';

export interface ContainerHeader {
    title: string
}

const ContainerHeader: FC<ContainerHeader> = ({ title }) => {
    return(
        <div>
            <Typography.Title>
                {title}
            </Typography.Title>
            <Divider dashed/>
        </div>
    );
}

export default ContainerHeader;
