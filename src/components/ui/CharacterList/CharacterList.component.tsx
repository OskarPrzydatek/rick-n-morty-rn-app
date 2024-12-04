import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {CharacterCard, CharacterListHeader, LoadingView} from '@components/ui';
import {styles} from './CharacterList.styled';
import {Character} from '@api/models';

interface CharacterListProps {
  searchInputValue: string;
  flattenCharactersResults: Character[] | undefined;
  isLoading?: boolean;
  ListFooterComponent: () => React.JSX.Element | null;
  isCharacterInFavorites: (id: number) => boolean;
  onChangeText: (text: string) => void;
  onPressCleanSearchValue: () => void;
  onPressNavigateToCharacterDetails: (url: string) => void;
  onPressAddToFavorites: (character: Character) => void;
  onPressRemoveFromFavorites: (id: number) => void;
  onEndReached?: () => void;
}

const CharacterList = ({
  searchInputValue,
  flattenCharactersResults,
  isLoading = false,
  ListFooterComponent,
  isCharacterInFavorites,
  onChangeText,
  onPressCleanSearchValue,
  onPressNavigateToCharacterDetails,
  onPressAddToFavorites,
  onPressRemoveFromFavorites,
  onEndReached,
}: CharacterListProps) => {
  const keyExtractor = (item: Character) => `${item.id}-${item.name}`;

  const renderItem = ({item}: {item: Character}) => {
    const handleisCharacterInFavorites = isCharacterInFavorites(item.id);

    const handlePressNavigateToCharacterDetails = () =>
      onPressNavigateToCharacterDetails(item.url);

    const handleOnPressAddToFavorites = () => onPressAddToFavorites(item);

    const handleOnPressRemoveFromFavorites = () =>
      onPressRemoveFromFavorites(item.id);

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePressNavigateToCharacterDetails}>
        <CharacterCard
          name={item.name}
          status={item.status}
          species={item.species}
          image={item.image}
          isCharacterInFavorites={handleisCharacterInFavorites}
          onPressAddToFavorites={handleOnPressAddToFavorites}
          onPressRemoveFromFavorites={handleOnPressRemoveFromFavorites}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CharacterListHeader
        searchValue={searchInputValue}
        placeholder="Search the characters"
        onChangeText={onChangeText}
        onPressCleanSearchValue={onPressCleanSearchValue}
      />

      {isLoading ? (
        <LoadingView />
      ) : (
        <FlatList
          data={flattenCharactersResults}
          ListFooterComponent={ListFooterComponent}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

export default CharacterList;
