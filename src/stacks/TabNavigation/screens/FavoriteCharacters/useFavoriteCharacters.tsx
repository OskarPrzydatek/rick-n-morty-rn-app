import React, {useCallback} from 'react';
import {NoCharactersFoundView} from '@components/ui';
import useDebouncedValue from '@hooks/useDebounceValue';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '@stacks/Main/Main.routes';
import useFavoritesStore from '@store/favorites';
import {useEffect, useState} from 'react';
import {Character} from '@api/models';
import useFilters from '@hooks/useFilters';

const useFavoriteCharacters = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedSearchValue = useDebouncedValue(searchInputValue);

  const {statusFilter, speciesFilter, applyFilters, resetFilters} =
    useFilters();

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
      const lowerCaseCharacterStatus = character.status.toLocaleLowerCase();
      const lowerCaseCharacterSpecies = character.species.toLowerCase();
      const lowerCaseSearchValue = debouncedSearchValue.toLocaleLowerCase();

      const isNameContainsSearchValue =
        lowerCaseCharacterName.includes(lowerCaseSearchValue);
      const isStatusMatching = lowerCaseCharacterStatus === statusFilter;
      const isSpeciesMachiong = lowerCaseCharacterSpecies === speciesFilter;

      const isCharacterMaching =
        isNameContainsSearchValue && isStatusMatching && isSpeciesMachiong;

      return isCharacterMaching;
    },
    [debouncedSearchValue, speciesFilter, statusFilter],
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
    if (debouncedSearchValue.length > 0 || statusFilter || speciesFilter) {
      const handleFiltredFavoritesList = favoritesList.filter(
        favoritesListSearchFilter,
      );

      setFiltredFavoritesList(handleFiltredFavoritesList);
    }

    if (debouncedSearchValue.length === 0 && !statusFilter && !speciesFilter) {
      setFiltredFavoritesList(favoritesList);
    }
  }, [
    debouncedSearchValue.length,
    favoritesList,
    favoritesListSearchFilter,
    speciesFilter,
    statusFilter,
  ]);

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
    applyFilters,
    resetFilters,
  };
};

export default useFavoriteCharacters;
