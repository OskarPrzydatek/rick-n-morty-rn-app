import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {TabNavigationStackRoutes} from './TabNavigation.routes';
import {TabBarIcon, TabBarIcons, TabBarLabel} from '@components/navigation';
import {colors} from '@constants/styles';

interface ScreenOptionsParams {
  route: RouteProp<ParamListBase, string>;
}

interface TabBarRenderParams {
  focused: boolean;
}

const renderTabBarLabel = (
  focused: boolean,
  route: RouteProp<ParamListBase, string>,
) => {
  if (route.name === TabNavigationStackRoutes.CharacterListScreen) {
    return <TabBarLabel focused={focused} label="ALL CHARACTERS" />;
  }

  if (route.name === TabNavigationStackRoutes.FavoriteCharactersScreen) {
    return <TabBarLabel focused={focused} label="LIKED CHARAKTERS" />;
  }
};

const renderTabBarIcon = (
  focused: boolean,
  route: RouteProp<ParamListBase, string>,
) => {
  if (route.name === TabNavigationStackRoutes.CharacterListScreen) {
    return <TabBarIcon icon={TabBarIcons.CHARACTERS} focused={focused} />;
  }

  if (route.name === TabNavigationStackRoutes.FavoriteCharactersScreen) {
    return <TabBarIcon icon={TabBarIcons.FAVORITES} focused={focused} />;
  }
};

export const screenOptions = ({route}: ScreenOptionsParams) => ({
  tabBarLabel: ({focused}: TabBarRenderParams) =>
    renderTabBarLabel(focused, route),
  tabBarIcon: ({focused}: TabBarRenderParams) =>
    renderTabBarIcon(focused, route),
  tabBarStyle: {
    backgroundColor: colors.darkGreen,
    padding: 16,
  },
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.greyshGreen,
});
