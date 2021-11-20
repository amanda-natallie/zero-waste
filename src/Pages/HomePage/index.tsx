import { Button, Typography } from '@vallorisolutions/foa-design-system';
import React from 'react';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs/Tabs';
import { useLogout } from '../../helpers/utils';
import Dashboard from '../Dashboard';
import MaterialList from '../MaterialList';
import UserHome from '../UserHome';

const HomePage = (): JSX.Element => {
    return (
        <Tabs>
            <Tab title="Inicio">
                <Dashboard />
            </Tab>
            <Tab title="Materiais">
                <MaterialList />
            </Tab>
            <Tab title="Meu Perfil">
                <UserHome />
            </Tab>
            <Tab title="Sair">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <Typography as="h5">Você está saindo do sistema.</Typography>
                    <br />
                    <Button onClick={(): void => useLogout()} variant="secondary" small>
                        Sair do sistema
                    </Button>
                </div>
            </Tab>
        </Tabs>
    );
};

export default HomePage;
