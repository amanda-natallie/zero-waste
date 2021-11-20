/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexBox, Col, Row, Typography, colors } from '@vallorisolutions/foa-design-system';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import ListItem from '../../components/ListItem';
import { api } from '../../api';
import { randomImg } from '../../helpers/utils';

const MaterialList: React.FC = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);

    const [companies, setCompanies] = useState<any[]>([]);

    const fetchCompanies = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await api.get<any>('empresas');
            setCompanies(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return !isLoading ? (
        <Row
            customStyles={{
                width: '100vw',
            }}
        >
            <Col size={12}>
                <Typography customStyles={{ marginTop: '20px', textAlign: 'center' }} as="h6">
                    Listagem de Empresas / Materiais
                </Typography>
                <ul style={{ maxWidth: '100vw' }}>
                    <ListItem title="Empresa 1" subtitle="Descrição da empresa 1" image={randomImg()} />
                    {companies &&
                        companies.map((company: any) => (
                            <ListItem
                                key={company.uuid}
                                title={company.nomepessoa}
                                subtitle={company.email}
                                image={randomImg()}
                            />
                        ))}
                </ul>
            </Col>
        </Row>
    ) : (
        <FlexBox fullScreen verticalAlign="center" horizontalAlign="center">
            <ReactLoading type="spinningBubbles" color={colors.colors.red} />
        </FlexBox>
    );
};

export default MaterialList;
