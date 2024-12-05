import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import CharactersIcon from '@assets/svg/characters.svg';
import FilledStarIcon from '@assets/svg/filled_star.svg';
import {colors} from '@constants/styles';
import {TabNavigationStackRoutes} from '@stacks/TabNavigation/TabNavigation.routes';
import {styles} from './TabBar.styled';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const activeTab = state.routes[state.index].name;

  const handleActiveTabColor = (screenName: string) =>
    activeTab === screenName ? colors.white : colors.greyshGreen;
  const handleActiveTabBorder = (screenName: string) =>
    activeTab === screenName ? colors.white : colors.darkGreen;

  const handleActiveCharacterListScreenColor = handleActiveTabColor(
    TabNavigationStackRoutes.CharacterListScreen,
  );
  const handleActiveFavoriteCharactersScreenColor = handleActiveTabColor(
    TabNavigationStackRoutes.FavoriteCharactersScreen,
  );

  const handleActiveCharacterListScreenBorder = handleActiveTabBorder(
    TabNavigationStackRoutes.CharacterListScreen,
  );
  const handleActiveFavoriteCharactersScreenBorder = handleActiveTabBorder(
    TabNavigationStackRoutes.FavoriteCharactersScreen,
  );

  const onPressNavigateToCharactersList = () =>
    navigation.navigate(TabNavigationStackRoutes.CharacterListScreen);
  const onPressNavigateToFavoriteCharacters = () =>
    navigation.navigate(TabNavigationStackRoutes.FavoriteCharactersScreen);

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          {
            borderBottomColor: handleActiveCharacterListScreenBorder,
          },
        ]}
        onPress={onPressNavigateToCharactersList}>
        <CharactersIcon color={handleActiveCharacterListScreenColor} />

        <Text
          style={[
            styles.label,
            {
              color: handleActiveCharacterListScreenColor,
            },
          ]}>
          ALL CHARACTERS
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.button,
          {
            borderBottomColor: handleActiveFavoriteCharactersScreenBorder,
          },
        ]}
        onPress={onPressNavigateToFavoriteCharacters}>
        <FilledStarIcon color={handleActiveFavoriteCharactersScreenColor} />

        <Text
          style={[
            styles.label,
            {
              color: handleActiveFavoriteCharactersScreenColor,
            },
          ]}>
          LIKED CHARACTERS
        </Text>
      </Pressable>
    </View>
  );
};

export default TabBar;
