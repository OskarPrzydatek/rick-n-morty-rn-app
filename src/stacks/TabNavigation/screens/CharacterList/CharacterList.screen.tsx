import React from 'react';
import useCharacterList from './useCharacterList';
import {CharacterList} from '@components/ui';

const CharacterListScreen = () => {
  const {
    flattenCharactersResults,
    isLoading,
    searchInputValue,
    onChangeText,
    onPressCleanSearchValue,
    onPressNavigateToCharacterDetails,
    ListFooterComponent,
    onEndReached,
    isCharacterInFavorites,
    addCharacterToFavorites,
    removeCharacterFormFavorites,
    applyFilters,
    resetFilters,
  } = useCharacterList();

  return (
    <CharacterList
      searchInputValue={searchInputValue}
      flattenCharactersResults={flattenCharactersResults}
      isLoading={isLoading}
      ListFooterComponent={ListFooterComponent}
      isCharacterInFavorites={isCharacterInFavorites}
      onChangeText={onChangeText}
      onPressCleanSearchValue={onPressCleanSearchValue}
      onPressNavigateToCharacterDetails={onPressNavigateToCharacterDetails}
      onEndReached={onEndReached}
      onPressAddToFavorites={addCharacterToFavorites}
      onPressRemoveFromFavorites={removeCharacterFormFavorites}
      applyFilters={applyFilters}
      resetFilters={resetFilters}
    />
  );
};

export default CharacterListScreen;
