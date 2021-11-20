import { Typography } from '@vallorisolutions/foa-design-system';
import React from 'react';
import Slider from 'react-slick';
import SearchIcon from './icons/1';
import CheckoutIcon from './icons/2';
import TransportIcon from './icons/3';
import StoreIcon from './icons/4';
import { StyledIconWrapper, StyleSlideItem } from './icons/styles';

const DashboardTiles = (): JSX.Element => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                <StyleSlideItem>
                    <StyledIconWrapper>
                        <SearchIcon />
                    </StyledIconWrapper>
                    <Typography as="h5">
                        Passo 01:
                        <br />
                        Busque entre as empresas disponiveis todos os materiais de descarte de acordo com a sua
                        necessidade.
                    </Typography>
                </StyleSlideItem>
                <StyleSlideItem>
                    <StyledIconWrapper>
                        <CheckoutIcon />
                    </StyledIconWrapper>
                    <Typography as="h5">
                        Passo 02:
                        <br />
                        Depois de escolher, faça o pagamento para a empresa que oferece o descarte. Todos os passos de
                        como fazer isto serão mostrados a você durante o processo.
                    </Typography>
                </StyleSlideItem>
                <StyleSlideItem>
                    <Typography as="h5">
                        <StyledIconWrapper>
                            <TransportIcon />
                        </StyledIconWrapper>
                        <br />
                        Passo 03:
                        <br />
                        Hora de transportar o material para o local de entrega que você cadastrou no passo anterior! Em
                        breve você receberá um email com os detalhes do pedido.
                    </Typography>
                </StyleSlideItem>
                <StyleSlideItem>
                    <StyledIconWrapper>
                        <StoreIcon />
                    </StyledIconWrapper>
                    <Typography as="h5">
                        Passo 04:
                        <br />
                        Agora é com você! Você pode acompanhar o andamento do seu pedido através do nosso site. Obrigado
                        por usar o nosso serviço!
                    </Typography>
                </StyleSlideItem>
            </Slider>
            <br />
            <br />
            <Typography as="small" customStyles={{ textAlign: 'center' }}>
                Dica: Clique no logotipo do header para ir para a pagina inicial
            </Typography>
        </>
    );
};

export default DashboardTiles;
