import styled from 'styled-components';
import { colors as theme } from '@vallorisolutions/foa-design-system';

export const StyledLayoutWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
    background-color: ${theme.background.default};
`;
