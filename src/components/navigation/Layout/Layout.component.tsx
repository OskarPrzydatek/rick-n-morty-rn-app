import React, {ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './Layout.styled';
import Logo from '@assets/svg/logo.svg';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}

      <View style={styles.footer}>
        <Logo width={301} height={92} />
      </View>
    </SafeAreaView>
  );
};

export default Layout;
