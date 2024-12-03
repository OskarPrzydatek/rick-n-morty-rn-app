import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import useCharacterList from './useCharacterList.service';

const CharacterListScreen = () => {
  const {
    flattenCharactersResults,
    ListHeaderComponent,
    keyExtractor,
    renderItem,
    onEndReached,
  } = useCharacterList();

  return (
    <View style={styles.container}>
      <FlatList
        data={flattenCharactersResults}
        ListHeaderComponent={ListHeaderComponent}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={onEndReached}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default CharacterListScreen;
