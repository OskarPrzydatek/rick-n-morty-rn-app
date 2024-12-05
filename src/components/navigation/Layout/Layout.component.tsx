import React, {ReactNode} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {styles} from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  const logoSource = require('@assets/images/logo.png');

  return (
    <SafeAreaView style={styles.container}>
      {children}

      <View style={styles.footer}>
        <Image source={logoSource} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

export default Layout;
