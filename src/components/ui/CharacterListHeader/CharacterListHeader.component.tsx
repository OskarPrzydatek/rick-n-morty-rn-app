import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './CharacterListHeader.styled';
import {FiltersDropdown, SearchInput} from '@components/ui';

interface ListHeaderProps {
  searchValue: string;
  placeholder: string;
  applyFilters: (statusValue: string, speciesValue: string) => void;
  resetFilters: () => void;
  onChangeText: (text: string) => void;
  onPressCleanSearchValue: () => void;
}

const CharacterListHeader = ({
  searchValue,
  placeholder,
  applyFilters,
  resetFilters,
  onChangeText,
  onPressCleanSearchValue,
}: ListHeaderProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const closeFilters = () => setShowFilters(false);
  const onPressFilters = () => setShowFilters(prev => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Characters</Text>

      <SearchInput
        searchValue={searchValue}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onPressCleanSearchValue={onPressCleanSearchValue}
      />

      <FiltersDropdown
        showFilters={showFilters}
        applyFilters={applyFilters}
        resetFilters={resetFilters}
        closeFilters={closeFilters}
        onPressFilters={onPressFilters}
      />
    </View>
  );
};

export default CharacterListHeader;
