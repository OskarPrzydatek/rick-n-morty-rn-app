import React from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {styles} from './Button.styled';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary' | 'tetriary' | 'quaternary';
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
  const labelColor =
    variant === 'secondary' || variant === 'quaternary'
      ? styles.lightLabel
      : styles.darkLabel;

  return (
    <Pressable
      style={[styles.container, styles[variant], style]}
      onPress={onPress}>
      {!!RightIcon && RightIcon}

      <Text style={[styles.label, labelColor]}>{label}</Text>

      {!!LeftIcon && LeftIcon}
    </Pressable>
  );
};

export default Button;
