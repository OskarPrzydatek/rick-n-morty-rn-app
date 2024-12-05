import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Header.styled';

const Header = () => {
  const logoSource = require('@assets/images/logo.png');

  return (
    <View style={styles.container}>
      <Image source={logoSource} style={styles.image} />
    </View>
  );
};

export default Header;
