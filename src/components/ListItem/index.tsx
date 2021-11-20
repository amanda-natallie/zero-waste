import React from 'react';
import { Button, FlexBox } from '@vallorisolutions/foa-design-system';
import { useUrl } from '../../helpers/utils';
import { StyledLi } from './styles';

interface Props {
    title: string;
    subtitle: string;
    image: string;
    product?: boolean;
}

const ListItem = ({ title, subtitle, image, product = false }: Props): JSX.Element => {
    const { navigate } = useUrl();
    return (
        <StyledLi onClick={(): void => navigate('/produtos')}>
            <img src={image} alt={title} width="100px" />
            <FlexBox
                noPadding
                horizontalAlign="center"
                customStyles={{
                    paddingLeft: 10,
                    textAlign: 'left',
                }}
            >
                <h6>{title}</h6>
                <span>{subtitle}</span>
                {product && (
                    <Button variant="gs" ghost customStyles={{ width: '100%' }}>
                        Adicionar Produto
                    </Button>
                )}
            </FlexBox>
        </StyledLi>
    );
};

export default ListItem;
