/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type Props = {
    title: string;
    onClick?: any;
};

const Tab: React.FC<Props> = ({ children, onClick = (): void => undefined }) => {
    return <div onClick={onClick}>{children}</div>;
};

export default Tab;
