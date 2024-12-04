import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './CharacterListHeader.styled';
import {SearchInput} from '@components/ui';

interface ListHeaderProps {
  searchValue: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onPressCleanSearchValue: () => void;
}

const CharacterListHeader = ({
  searchValue,
  placeholder,
  onChangeText,
  onPressCleanSearchValue,
}: ListHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Characters</Text>

      <SearchInput
        searchValue={searchValue}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onPressCleanSearchValue={onPressCleanSearchValue}
      />
    </View>
  );
};

export default CharacterListHeader;
