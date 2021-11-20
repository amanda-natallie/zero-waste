import React, { useState } from 'react';
import { ReactElement } from 'react';
import { StyledTabUl } from './styles';
import TabTitle from './TabTitle';

type Props = {
    children: ReactElement[];
};

const Tabs: React.FC<Props> = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <>
            {children[selectedTab]}
            <StyledTabUl>
                {children.map((item, index) => {
                    return (
                        <TabTitle
                            key={index}
                            title={item.props.title}
                            index={index}
                            currentTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    );
                })}
            </StyledTabUl>
        </>
    );
};

export default Tabs;
