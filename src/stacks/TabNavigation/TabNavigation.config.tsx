import React from 'react';
import {TabBar} from '@components/navigation';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

export const renderTabBar = ({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) => (
  <TabBar
    state={state}
    descriptors={descriptors}
    navigation={navigation}
    insets={insets}
  />
);
