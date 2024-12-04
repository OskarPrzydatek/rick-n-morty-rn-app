import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './NoCharactersFoundView.styled';

const NoCharactersFoundView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>No characters found :(</Text>
    </View>
  );
};

export default NoCharactersFoundView;
