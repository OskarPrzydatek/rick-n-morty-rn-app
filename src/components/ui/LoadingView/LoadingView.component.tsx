import React from 'react';
import {colors} from '@constants/styles';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './LoadingView.styled';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.darkGreen} />
    </View>
  );
};

export default LoadingView;
