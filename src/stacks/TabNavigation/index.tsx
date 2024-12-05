import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationStackRoutes} from './TabNavigation.routes';
import {renderTabBar} from './TabNavigation.config';
import {CharacterListScreen, FavoriteCharactersScreen} from './screens';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator tabBar={renderTabBar}>
      <Tab.Screen
        name={TabNavigationStackRoutes.CharacterListScreen}
        component={CharacterListScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={TabNavigationStackRoutes.FavoriteCharactersScreen}
        component={FavoriteCharactersScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
