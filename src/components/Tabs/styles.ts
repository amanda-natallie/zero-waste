/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors } from '@vallorisolutions/foa-design-system';
import styled, { css } from 'styled-components';
interface Props {
    active?: boolean;
}

export const StyledTabLi = styled.button<Props>`
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    padding: 15px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 0;
    background: transparent;
    outline: 0;
    &:hover {
        background: rgba(0, 0, 0, 0.08);
    }

    ${({ active }): any =>
        active &&
        css`
            &:after {
                content: '';
                position: absolute;
                bottom: 0px;
                left: 0;
                width: 100%;
                height: 5px;
                background: ${colors.green};
            }
        `}
`;

export const StyledTabUl = styled.ul`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: #f5f5f5;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;
