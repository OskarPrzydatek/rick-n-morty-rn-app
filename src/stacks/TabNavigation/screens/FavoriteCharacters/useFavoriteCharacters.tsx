import React, {useCallback} from 'react';
import {NoCharactersFoundView} from '@components/ui';
import useDebouncedValue from '@hooks/useDebounceValue';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '@stacks/Main/Main.routes';
import useFavoritesStore from '@store/favorites';
import {useEffect, useState} from 'react';
import {Character} from '@api/models';

const useFavoriteCharacters = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedSearchValue = useDebouncedValue(searchInputValue);

  const {
    favoritesList,
    isCharacterInFavorites,
    addCharacterToFavorites,
    removeCharacterFormFavorites,
  } = useFavoritesStore();

  const [filtredFavoritesList, setFiltredFavoritesList] =
    useState(favoritesList);

  const favoritesListSearchFilter = useCallback(
    (character: Character) => {
      const lowerCaseCharacterName = character.name.toLocaleLowerCase();
      const lowerCaseSearchValue = debouncedSearchValue.toLocaleLowerCase();

      return lowerCaseCharacterName.includes(lowerCaseSearchValue);
    },
    [debouncedSearchValue],
  );

  const onChangeText = (text: string) => setSearchInputValue(text);
  const onPressCleanSearchValue = () => setSearchInputValue('');

  const onPressNavigateToCharacterDetails = (url: string) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {url},
    });

  const ListFooterComponent = () => {
    if (favoritesList.length === 0) {
      return <NoCharactersFoundView />;
    }

    return null;
  };

  useEffect(() => {
    if (debouncedSearchValue.length > 0) {
      const handleFiltredFavoritesList = favoritesList.filter(
        favoritesListSearchFilter,
      );

      setFiltredFavoritesList(handleFiltredFavoritesList);
    }

    if (debouncedSearchValue.length === 0) {
      setFiltredFavoritesList(favoritesList);
    }
  }, [debouncedSearchValue.length, favoritesList, favoritesListSearchFilter]);

  return {
    searchInputValue,
    filtredFavoritesList,
    isCharacterInFavorites,
    addCharacterToFavorites,
    removeCharacterFormFavorites,
    onChangeText,
    onPressCleanSearchValue,
    onPressNavigateToCharacterDetails,
    ListFooterComponent,
  };
};

export default useFavoriteCharacters;
