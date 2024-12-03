import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ListHeader.styled';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Characters</Text>
    </View>
  );
};

export default ListHeader;
