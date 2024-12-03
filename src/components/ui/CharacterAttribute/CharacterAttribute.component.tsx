import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './CharacterAttribute.styled';

interface CharacterAttributeProps {
  label: string;
  value: string;
}

const CharacterAttribute = ({label, value}: CharacterAttributeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default CharacterAttribute;
