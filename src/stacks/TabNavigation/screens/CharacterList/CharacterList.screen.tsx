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
    />
  );
};

export default CharacterListScreen;
