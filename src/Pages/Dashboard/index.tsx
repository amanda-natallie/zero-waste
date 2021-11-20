import { FlexBox, Typography } from '@vallorisolutions/foa-design-system';
import React from 'react';
import DashboardTiles from './DashboardTiles';

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <FlexBox fullScreen verticalAlign="center" horizontalAlign="center">
            <Typography as="h3">Olá, Suellen!</Typography>
            <Typography as="small">Seja Bem vinda ao Zero Waste</Typography>
            <br />
            <DashboardTiles />
        </FlexBox>
    );
};

export default Dashboard;
