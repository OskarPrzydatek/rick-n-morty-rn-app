import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './SearchInput.styled';
import MagnifierIcon from '@assets/svg/magnifier.svg';
import CrossIcon from '@assets/svg/cross.svg';
import {colors} from '@constants/styles';

interface SearchInputProps {
  searchValue: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onPressCleanSearchValue: () => void;
}

const SearchInput = ({
  searchValue,
  placeholder,
  onChangeText,
  onPressCleanSearchValue,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <MagnifierIcon />

      <TextInput
        value={searchValue}
        placeholder={placeholder}
        placeholderTextColor={colors.mediumGreen}
        style={styles.input}
        onChangeText={onChangeText}
      />

      <TouchableOpacity activeOpacity={0.5} onPress={onPressCleanSearchValue}>
        <CrossIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
