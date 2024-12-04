import React, {useEffect, useState} from 'react';
import {CharactersResponse} from '@api/models';
import {getAllCharacters} from '@api/services';
import {NoCharactersFoundView} from '@components/ui';
import {BASE_URL, Endpoinst} from '@constants/api';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '@stacks/Main/Main.routes';
import {InfiniteData, useInfiniteQuery} from '@tanstack/react-query';
import {ActivityIndicator} from 'react-native';
import {colors} from '@constants/styles';
import useDebouncedValue from '@hooks/useDebounceValue';
import useFavoritesStore from '@store/favorites';

const useCharacterList = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedSearchValue = useDebouncedValue(searchInputValue);

  const initialPageUrl = `${BASE_URL}/${Endpoinst.ALL_CHARACTERS}`;
  const searchWithFiltersPageUrl = `${BASE_URL}/${Endpoinst.ALL_CHARACTERS}/?name=${debouncedSearchValue}`;

  const [pageUrl, setPageUrl] = useState(initialPageUrl);

  const {data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage} =
    useInfiniteQuery<
      CharactersResponse,
      Error,
      InfiniteData<CharactersResponse>,
      string[],
      string
    >({
      queryKey: ['all_characters', pageUrl],
      queryFn: ({pageParam}) => getAllCharacters(pageParam),
      initialPageParam: pageUrl,
      getNextPageParam: lastPage => lastPage.info.next,
    });

  const {
    isCharacterInFavorites,
    addCharacterToFavorites,
    removeCharacterFormFavorites,
  } = useFavoritesStore();

  const flattenCharactersResults = data?.pages.flatMap(page => page.results);

  const onChangeText = (text: string) => setSearchInputValue(text);
  const onPressCleanSearchValue = () => setSearchInputValue('');

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const onPressNavigateToCharacterDetails = (url: string) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {url},
    });

  const ListFooterComponent = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator color={colors.darkGreen} />;
    }

    if (!flattenCharactersResults) {
      return <NoCharactersFoundView />;
    }

    return null;
  };

  useEffect(() => {
    if (debouncedSearchValue.length > 0) {
      setPageUrl(searchWithFiltersPageUrl);
    }

    if (debouncedSearchValue.length === 0) {
      setPageUrl(initialPageUrl);
    }
  }, [debouncedSearchValue, initialPageUrl, searchWithFiltersPageUrl]);

  return {
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
  };
};

export default useCharacterList;
