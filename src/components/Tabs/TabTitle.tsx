import React, { useCallback } from 'react';
import { StyledTabLi } from './styles';

type Props = {
    title: string;
    index: number;
    currentTab: number;
    setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, index, currentTab, setSelectedTab }) => {
    const tabClickHandle = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    const activeTab = currentTab === index;

    return (
        <StyledTabLi active={activeTab} onClick={tabClickHandle}>
            {title}
        </StyledTabLi>
    );
};

export default TabTitle;
