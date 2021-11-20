/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlexBox, Button, Card, Col, Input, Row, Typography, colors } from '@vallorisolutions/foa-design-system';
import { useFormik } from 'formik';
import React, { useState } from 'react';
// import { api } from '../../api';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import ZWBrand from '../../icons/logo';
import { useHistory } from 'react-router';

const LoginPage: React.FC = (): JSX.Element => {
    const history = useHistory();
    const [isLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Digite seu usuário/login'),
            password: Yup.string().required('Digite sua senha'),
        }),
        onSubmit: () => {
            localStorage.setItem('isAuth', 'true');
            window.location.replace('/');
        },
    });

    return (
        <Row
            customStyles={{
                width: '100vw',
                height: '100vh',
                background: 'url(https://jis.gov.jm/media/2019/03/shutterstock_600755237.jpg) top center no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Card customStyles={{ width: '90vw', height: '600px', margin: 'auto' }}>
                <ZWBrand />
                <Typography customStyles={{ marginTop: '20px', textAlign: 'center' }} as="h6">
                    Bem vindo ao Zero Waste! <br /> Faça seu login para continuar.
                </Typography>
                <form onSubmit={formik.handleSubmit} style={{ marginLeft: '-5px', width: '90vw', textAlign: 'left' }}>
                    <FlexBox customStyles={{ width: '100%' }} direction="column">
                        <Col size={12}>
                            <Input
                                label="E-mail"
                                name="email"
                                type="email"
                                placeholder="Digite seu e-mail"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                messageError={formik.errors.email}
                            />
                        </Col>
                        <br />
                        <Col size={12}>
                            <Input
                                label="Senha"
                                name="password"
                                type="password"
                                placeholder="Digite sua senha"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                messageError={formik.errors.password}
                                showIconPassword
                            />
                        </Col>
                    </FlexBox>

                    <FlexBox
                        direction="column"
                        verticalAlign="center"
                        horizontalAlign="center"
                        customStyles={{ width: '100%', padding: 0 }}
                    >
                        <Button
                            // onClick={(): void => {
                            //     console.log('aaaa botao');
                            //     formik.submitForm();
                            //     localStorage.setItem('isAuth', 'true');
                            //     history.push('/');
                            //     console.log('22222');
                            // }}
                            size="fluid"
                            small
                            type="submit"
                            variant="gs"
                        >
                            {isLoading ? (
                                <ReactLoading type="bars" color={colors.colors.white} height={25} />
                            ) : (
                                'Entrar no sistema'
                            )}
                        </Button>
                        ou
                        <Button
                            onClick={(): any => history.push('/cadastro')}
                            size="fluid"
                            small
                            type="button"
                            variant="secondary"
                        >
                            Criar nova conta
                        </Button>
                    </FlexBox>
                </form>
            </Card>
        </Row>
    );
};

export default LoginPage;
