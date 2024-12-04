import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackRoutes} from './Main.routes';
import {renderHeader, renderLayout} from './Main.config';
import {CharacterDetailsStack} from '@stacks/CharacterDetails';
import {TabNavigationStack} from '@stacks/TabNavigation';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: renderHeader,
      }}
      layout={renderLayout}>
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
      />
    </Tab.Navigator>
  );
};
