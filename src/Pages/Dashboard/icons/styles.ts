import { colors as theme } from '@vallorisolutions/foa-design-system';
import styled from 'styled-components';

export const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: ${theme.background.green};
    border: 1px solid ${theme.border.default};
    box-shadow: 0px 0px 10px ${theme.box.DEFAULT_BOX_SHADOW};
    margin: 0px auto;
    padding: 0;

    & svg {
        width: 90px;
        height: 100%;
    }
`;

export const StyleSlideItem = styled.div`
    display: block;
    padding: 20px;

    & h5 {
        padding-top: 50px;
        text-align: center;
        font-weight: bold;
        margin: 0;
    }
`;
