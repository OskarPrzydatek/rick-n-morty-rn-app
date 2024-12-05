import React from 'react';
import {CharacterList} from '@components/ui';
import useFavoriteCharacters from './useFavoriteCharacters';

const FavoriteCharactersScreen = () => {
  const {
    searchInputValue,
    filtredFavoritesList,
    isCharacterInFavorites,
    removeCharacterFormFavorites,
    addCharacterToFavorites,
    onChangeText,
    onPressCleanSearchValue,
    onPressNavigateToCharacterDetails,
    ListFooterComponent,
    applyFilters,
    resetFilters,
  } = useFavoriteCharacters();

  return (
    <CharacterList
      searchInputValue={searchInputValue}
      flattenCharactersResults={filtredFavoritesList}
      ListFooterComponent={ListFooterComponent}
      isCharacterInFavorites={isCharacterInFavorites}
      onChangeText={onChangeText}
      onPressCleanSearchValue={onPressCleanSearchValue}
      onPressNavigateToCharacterDetails={onPressNavigateToCharacterDetails}
      onPressAddToFavorites={addCharacterToFavorites}
      onPressRemoveFromFavorites={removeCharacterFormFavorites}
      applyFilters={applyFilters}
      resetFilters={resetFilters}
    />
  );
};

export default FavoriteCharactersScreen;
