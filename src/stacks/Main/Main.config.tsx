import {Header, Layout} from '@components/navigation';
import React, {ReactNode} from 'react';

export const renderHeader = () => <Header />;

export const renderLayout = ({children}: {children: ReactNode}) => (
  <Layout children={children} />
);
