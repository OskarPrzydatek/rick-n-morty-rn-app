import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import useCharacterList from './useCharacterList.service';
import {CharacterListHeader, LoadingView} from '@components/ui';

const CharacterListScreen = () => {
  const {
    flattenCharactersResults,
    isLoading,
    searchInputValue,
    onChangeText,
    onPressCleanSearchValue,
    ListFooterComponent,
    keyExtractor,
    renderItem,
    onEndReached,
  } = useCharacterList();

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

export default CharacterListScreen;
