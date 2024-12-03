import React from 'react';
import CharactersTabIcon from '@assets/svg/characters_tab_icon.svg';
import FavoritesTabIcon from '@assets/svg/favorites_tab_icon.svg';
import {TabBarIcons} from './TabBarIcons.enum';
import {colors} from '@constants/styles';

interface TabBarIconProps {
  icon: TabBarIcons;
  focused: boolean;
}

const TabBarIcon = ({icon, focused}: TabBarIconProps) => {
  const color = focused ? colors.white : colors.greyshGreen;

  switch (icon) {
    case TabBarIcons.CHARACTERS: {
      return <CharactersTabIcon color={color} />;
    }

    case TabBarIcons.FAVORITES: {
      return <FavoritesTabIcon color={color} />;
    }

    default:
      return null;
  }
};

export default TabBarIcon;
