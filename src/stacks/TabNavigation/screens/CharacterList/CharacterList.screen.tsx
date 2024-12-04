import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import useCharacterList from './useCharacterList.service';
import {LoadingView} from '@components/ui';

const CharacterListScreen = () => {
  const {
    flattenCharactersResults,
    isLoading,
    ListHeaderComponent,
    ListFooterComponent,
    keyExtractor,
    renderItem,
    onEndReached,
  } = useCharacterList();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingView />
      ) : (
        <FlatList
          data={flattenCharactersResults}
          ListHeaderComponent={ListHeaderComponent}
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
