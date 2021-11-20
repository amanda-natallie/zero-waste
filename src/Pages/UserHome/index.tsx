import { Avatar, Button, FlexBox, Typography } from '@vallorisolutions/foa-design-system';
import React from 'react';
import IconNoOrders from './1';
import { CustomCard } from './styles';

const UserHome = (): JSX.Element => {
    return (
        <>
            <br />
            <br />
            <CustomCard noPadding horizontalAlign="center">
                <Avatar imageUrl="https://i.pravatar.cc/100" size="lg" />
                <br />
                <Typography as="h6" variant="secondary" customStyles={{ textAlign: 'center' }}>
                    Olá, Suellen. Você tem 0 pedidos em aberto.
                </Typography>
                <br />
                <br />
                <br />
                <FlexBox noPadding horizontalAlign="center" direction="row">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Button small variant="gs">
                        Meus Cupons
                    </Button>
                    <span>&nbsp;&nbsp;</span>
                    <Button small variant="gs">
                        Meus Pedidos
                    </Button>
                    <span>&nbsp;&nbsp;</span>
                    <Button small variant="gs">
                        Meus Endereços
                    </Button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </FlexBox>
                <br />
            </CustomCard>
            <br />
            <Typography as="p" customStyles={{ paddingInline: 20, textAlign: 'center' }}>
                Você ainda não possui nenhuma ordem. Na página de <a href="/orders">Ordens</a> você pode criar uma nova
                ordem.
            </Typography>
            <IconNoOrders />
        </>
    );
};

export default UserHome;
