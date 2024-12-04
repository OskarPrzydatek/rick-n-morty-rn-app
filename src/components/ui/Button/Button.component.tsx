import React from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {labelStyles, styles} from './Button.styled';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'tetriary';
  style?: StyleProp<ViewStyle>;
  RightIcon?: React.JSX.Element;
  LeftIcon?: React.JSX.Element;
  onPress: () => void;
}

const Button = ({
  label,
  variant = 'primary',
  style,
  RightIcon,
  LeftIcon,
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      style={[styles.container, styles[variant], style]}
      onPress={onPress}>
      {!!RightIcon && RightIcon}

      <Text style={[labelStyles.label, labelStyles[variant]]}>{label}</Text>

      {!!LeftIcon && LeftIcon}
    </Pressable>
  );
};

export default Button;
