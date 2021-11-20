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
            <Tab title="Sair" onClick={(): void => useLogout()} />
        </Tabs>
    );
};

export default HomePage;
