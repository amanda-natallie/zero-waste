import { FlexBox } from '@vallorisolutions/foa-design-system';
import styled from 'styled-components';
import { colors as theme } from '@vallorisolutions/foa-design-system';

export const StyledLi = styled(FlexBox)`
    width: calc(100% - 40px);
    height: 120px;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${theme.colors.gray.light};
    background-color: ${theme.colors.white};
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0px 0px 10px ${theme.colors.gray.light};
    }

    & img {
        display: inline-block;
        max-width: 100px;
    }
`;
