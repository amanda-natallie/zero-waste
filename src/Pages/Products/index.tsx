/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexBox, Col, Row, Typography, colors, Avatar, Button } from '@vallorisolutions/foa-design-system';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import ListItem from '../../components/ListItem';
import { api } from '../../api';
import { CustomCard } from '../UserHome/styles';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs/Tabs';
import { randomImg, useLogout, useUrl } from '../../helpers/utils';

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
                    overflowY: 'auto',
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
                                    key={material.uuid}
                                    title={material.nome}
                                    subtitle={`Qty: ${material.quantidade} / R$${material.preco}`}
                                    image={randomImg()}
                                />
                            ))}
                    </ul>
                </Col>
            </Row>
            <br />
            <Typography as="small" customStyles={{ textAlign: 'center', padding: '0 50px 10px 50px' }}>
                Dica: Clique no logotipo do header para ir para a pagina inicial
            </Typography>
        </>
    ) : (
        <FlexBox fullScreen verticalAlign="center" horizontalAlign="center">
            <ReactLoading type="spinningBubbles" color={colors.colors.red} />
        </FlexBox>
    );
};

export default ProductList;
