/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexBox, Col, Row, Typography, colors, Avatar } from '@vallorisolutions/foa-design-system';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import ListItem from '../../components/ListItem';
import { api } from '../../api';
import { CustomCard } from '../UserHome/styles';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs/Tabs';
import { useLogout, useUrl } from '../../helpers/utils';

const ProductList: React.FC = (): JSX.Element => {
    const { navigate } = useUrl();
    const [isLoading, setIsLoading] = useState(false);

    const [materials, setMaterials] = useState<any[]>([]);

    const fetchMaterials = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await api.get<any>('/materiais');
            setMaterials(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMaterials();
    }, []);

    return !isLoading ? (
        <>
            <Row
                customStyles={{
                    width: '100vw',
                }}
            >
                <Col size={12}>
                    <br />
                    <br />
                    <CustomCard noPadding horizontalAlign="center">
                        <Avatar imageUrl="https://i.pravatar.cc/100" size="lg" />
                        <br />
                        <Typography as="h6" variant="primary" customStyles={{ textAlign: 'center' }}>
                            Empresa 1 - Produtos de Descarte
                        </Typography>
                        <Typography as="p" variant="secondary" customStyles={{ textAlign: 'center' }}>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </Typography>
                        <br />
                    </CustomCard>
                    <br />
                    <Typography as="h6" variant="secondary" customStyles={{ textAlign: 'center' }}>
                        Produtos para descarte disponíveis
                    </Typography>
                    <ul style={{ maxWidth: '100vw' }}>
                        <ListItem
                            title="Empresa 1"
                            subtitle="Descrição da empresa 1"
                            image="https://jis.gov.jm/media/2019/03/shutterstock_600755237.jpg"
                        />
                        {materials &&
                            materials.map((material: any) => (
                                <ListItem
                                    key={material.id}
                                    title={material.name}
                                    subtitle={material.description}
                                    image={material.image}
                                />
                            ))}
                    </ul>
                </Col>
            </Row>
            <Tabs>
                <Tab title="Inicio" onClick={(): void => navigate('/home-app')} />
                <Tab title="Sair" onClick={(): void => useLogout()} />
            </Tabs>
            <br />
        </>
    ) : (
        <FlexBox fullScreen verticalAlign="center" horizontalAlign="center">
            <ReactLoading type="spinningBubbles" color={colors.colors.red} />
        </FlexBox>
    );
};

export default ProductList;
