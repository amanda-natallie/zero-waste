import { FlexBox, colors, Row, Col } from '@vallorisolutions/foa-design-system';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
import ZWBrand from '../../icons/logo';
import { StyledLayoutWrapper } from './styles';
import { FiLogOut } from 'react-icons/fi';
import { StyledIconWrapper } from '../../Pages/Dashboard/icons/styles';
import { useLogout, useUrl } from '../../helpers/utils';

const PageLayout: React.FC = ({ children }): JSX.Element => {
    const [isLoading] = useState(false);
    const { location } = useHistory();
    const { navigate } = useUrl();
    console.log(location.pathname);
    return !isLoading ? (
        <StyledLayoutWrapper>
            <Row
                customStyles={{
                    width: '100vw',
                    justifyContent: 'space-around',
                    backgroundColor: colors.background.paper,
                    marginBottom: '1rem',
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
                }}
            >
                <Col size={6} customStyles={{ marginBlock: 10 }}>
                    <StyledIconWrapper
                        style={{ height: 50, width: 50, float: 'left', marginLeft: 20 }}
                        onClick={(): void => navigate('/home-app')}
                    >
                        <ZWBrand />
                    </StyledIconWrapper>
                </Col>
                <Col size={6} customStyles={{ textAlign: 'right', paddingRight: 20 }}>
                    <span onClick={(): void => useLogout()}>
                        <FiLogOut style={{ width: 30, height: '100%' }} />
                    </span>
                </Col>
            </Row>
            {children}
        </StyledLayoutWrapper>
    ) : (
        <FlexBox fullScreen verticalAlign="center" horizontalAlign="center">
            <ReactLoading type="spinningBubbles" color={colors.colors.red} />
        </FlexBox>
    );
};

export default PageLayout;
