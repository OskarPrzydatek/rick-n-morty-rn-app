import React from 'react';
import {Character, CharactersResponse} from '@api/models';
import {getAllCharacters} from '@api/services';
import {CharacterCard, ListHeader} from '@components/ui';
import {BASE_URL, Endpoinst} from '@constants/api';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '@stacks/Main/Main.routes';
import {InfiniteData, useInfiniteQuery} from '@tanstack/react-query';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {colors} from '@constants/styles';

const useCharacterList = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const initialPageUrl = `${BASE_URL}/${Endpoinst.ALL_CHARACTERS}`;

  const {data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage} =
    useInfiniteQuery<
      CharactersResponse,
      Error,
      InfiniteData<CharactersResponse>,
      string[],
      string
    >({
      queryKey: ['all_characters'],
      queryFn: ({pageParam}) => getAllCharacters(pageParam),
      initialPageParam: initialPageUrl,
      getNextPageParam: lastPage => lastPage.info.next,
    });

  const flattenCharactersResults = data?.pages.flatMap(page => page.results);

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

  const ListHeaderComponent = () => <ListHeader />;

  const ListFooterComponent = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator />;
    }

    return <ActivityIndicator color={colors.darkGreen} />;
  };

  const keyExtractor = (item: Character) => `${item.id}-${item.name}`;

  const renderItem = ({item}: {item: Character}) => {
    const handlePressNavigateToCharacterDetails = () =>
      onPressNavigateToCharacterDetails(item.url);

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePressNavigateToCharacterDetails}>
        <CharacterCard
          name={item.name}
          status={item.status}
          species={item.species}
          image={item.image}
        />
      </TouchableOpacity>
    );
  };

  return {
    flattenCharactersResults,
    isLoading,
    ListHeaderComponent,
    ListFooterComponent,
    keyExtractor,
    renderItem,
    onEndReached,
  };
};

export default useCharacterList;
