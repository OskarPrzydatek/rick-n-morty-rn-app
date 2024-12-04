import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './CharacterAttribute.styled';

interface CharacterAttributeProps {
  label: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}

const CharacterAttribute = ({label, value, style}: CharacterAttributeProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default CharacterAttribute;
