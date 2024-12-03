import React from 'react';
import {View} from 'react-native';
import Logo from '@assets/svg/logo.svg';
import {styles} from './Header.styled';

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo width={104} height={32} />
    </View>
  );
};

export default Header;
