import React from 'react';
import {Text} from 'react-native';
import {styles} from './TabBarLabel.styed';
import {colors} from '@constants/styles';

interface TabBarLabelProps {
  focused: boolean;
  label: string;
}

const TabBarLabel = ({focused, label}: TabBarLabelProps) => {
  const color = focused ? colors.white : colors.greyshGreen;

  return <Text style={[styles.label, {color}]}>{label}</Text>;
};

export default TabBarLabel;
