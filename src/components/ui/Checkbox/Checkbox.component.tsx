import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Checkbox.styled';
import TickIcon from '@assets/svg/tick.svg';

interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onPress: () => void;
}

const Checkbox = ({label, checked, onPress}: CheckboxProps) => {
  const checkboxCheckedStyle = checked ? styles.checked : styles.unchecked;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={[styles.checkbox, checkboxCheckedStyle]}>{checked && <TickIcon />}</View>

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
