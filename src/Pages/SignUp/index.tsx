/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FlexBox,
    Button,
    Card,
    Col,
    Input,
    Row,
    Typography,
    colors,
    Dialog,
    Divider,
} from '@vallorisolutions/foa-design-system';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
// import { api } from '../../api';
import * as Yup from 'yup';
import ReactLoading from 'react-loading';
import ZWBrand from '../../icons/logo';
import { useHistory } from 'react-router';
import { colors as palette } from '@vallorisolutions/foa-design-system';

const SignUpPage: React.FC = (): JSX.Element => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [dialogInfo, setDialogInfo] = useState<any>({
        width: 'auto',
        disableBackdropClick: false,
        isOpen: false,
        info: {
            title: 'Obrigada pelo interesse em nosso app de Logistica Reversa',
            subtitle:
                'Seu cadastro foi efetuado com sucesso. Agora você poderá negociar materiais de descarte em nossa página de listagem. Aproveite!',
            confirmButton: {
                title: 'Ok!',
                action: (): void => {
                    window.location.replace('/');
                },
            },
            children: null,
        },
    });
    const formik = useFormik({
        initialValues: {
            personType: '',
            name: '',
            email: '',
            address: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            personType: Yup.string().required('Escolha um tipo de pessoa'),
            name: Yup.string().required('Nome é obrigatório'),
            email: Yup.string().email('Insira um email válido').required('E-mail é obrigatório'),
            address: Yup.string().required('Endereço é obrigatório'),
            password: Yup.string()

                .min(8, 'Sua senha deve conter no minimo 8 caracteres')
                .required('Senha é obrigatório'),
        }),
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: async () => undefined,
    });
    useEffect(() => {
        //do nothing
    }, [formik]);

    const handleSubmit = async (): Promise<void> => {
        setIsLoading(true);
        try {
            localStorage.setItem('isAuth', 'true');
            // const response = await api.post('/users', formik.values);
            // if (response.status === 200) {
            setDialogInfo({
                ...dialogInfo,
                isOpen: true,
            });
            // }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <>
            <Dialog {...dialogInfo} />
            <Row
                customStyles={{
                    width: '100vw',
                    height: '100vh',
                    overflowY: 'auto',
                    background:
                        'url(https://ecotelhado.com/wp-content/uploads/2021/03/o-que-e-logistica-reversa.jpg) top center no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Card customStyles={{ width: '90vw', minHeight: '600px', margin: 'auto' }}>
                    <ZWBrand />
                    <Typography customStyles={{ marginTop: '20px', textAlign: 'center' }} as="h6">
                        Ainda não possui uma conta? <br /> Cadastre-se agora!
                    </Typography>
                    <form
                        onSubmit={(e): any => e.preventDefault()}
                        style={{ marginLeft: '-5px', width: '90vw', textAlign: 'left' }}
                    >
                        <FlexBox customStyles={{ width: '100%' }} direction="column">
                            <Col size={12}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        style={{
                                            width: 24,
                                            height: 24,
                                            display: 'inline-block',
                                        }}
                                        type="radio"
                                        name="personType"
                                        value="Fisica"
                                        onChange={formik.handleChange}
                                        placeholder=""
                                    />
                                    <Typography as="label" customStyles={{ marginTop: '10px' }}>
                                        Pessoa Física
                                    </Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        style={{
                                            width: 24,
                                            height: 24,
                                            display: 'inline-block',
                                        }}
                                        type="radio"
                                        name="personType"
                                        value="Juridica"
                                        onChange={formik.handleChange}
                                        placeholder=""
                                    />
                                    <Typography as="label" customStyles={{ marginTop: '10px' }}>
                                        Pessoa Juridica
                                    </Typography>
                                </div>
                            </Col>
                            <Divider fullWidth borderColor={palette.border.default} />
                            <Col size={12}>
                                <Input
                                    label="Seu Nome"
                                    name="name"
                                    type="text"
                                    placeholder="Digite seu nome"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    messageError={formik.errors.name}
                                />
                            </Col>
                            <br />
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
                                    label="Endereço completo"
                                    name="address"
                                    type="textarea"
                                    placeholder="Ex.: Av. 1, Nª 309, Bairro, Cidade, Estado/BR"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    messageError={formik.errors.address}
                                />
                            </Col>
                            <br />
                            <Col size={12}>
                                <Input
                                    label="Escolha uma senha"
                                    name="password"
                                    type="password"
                                    placeholder="Digite uma senha"
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
                            <Button onClick={(): any => handleSubmit()} size="fluid" small type="button" variant="gs">
                                {isLoading ? (
                                    <ReactLoading type="bars" color={colors.colors.white} height={25} />
                                ) : (
                                    'Criar nova conta'
                                )}
                            </Button>
                            ou
                            <Button
                                onClick={(): any => history.push('/login')}
                                size="fluid"
                                small
                                type="button"
                                variant="secondary"
                            >
                                Fazer login
                            </Button>
                        </FlexBox>
                    </form>
                </Card>
            </Row>
        </>
    );
};

export default SignUpPage;
