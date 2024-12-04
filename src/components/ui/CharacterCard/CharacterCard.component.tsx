import React from 'react';
import {Status} from '@api/models';
import {Image, View} from 'react-native';
import {styles} from './CharacterCard.styled';
import {Button, CharacterAttribute} from '@components/ui';
import FullfiledStarIcon from '@assets/svg/favorites_tab_icon.svg';
import StarIcon from '@assets/svg/star.svg';
import {colors} from '@constants/styles';

interface CharacterCardProps {
  name: string;
  status: Status;
  species: string;
  image: string;
  isCharacterInFavorites: boolean;
  onPressAddToFavorites: () => void;
  onPressRemoveFromFavorites: () => void;
}

const CharacterCard = ({
  name,
  status,
  species,
  image,
  isCharacterInFavorites,
  onPressAddToFavorites,
  onPressRemoveFromFavorites,
}: CharacterCardProps) => {
  const buttonVariant = isCharacterInFavorites ? 'tetriary' : 'primary';
  const RightIcon = isCharacterInFavorites ? (
    <FullfiledStarIcon color={colors.accent} width={16} height={16} />
  ) : (
    <StarIcon color={colors.darkGreen} width={16} height={16} />
  );

  const onPress = isCharacterInFavorites
    ? onPressRemoveFromFavorites
    : onPressAddToFavorites;

  return (
    <View style={styles.container}>
      <View style={styles.characterAttributes}>
        <CharacterAttribute label="NAME" value={name} />

        <CharacterAttribute label="STATUS" value={status} />

        <CharacterAttribute label="SPECIES" value={species} />
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />

        <Button
          label="LIKE"
          variant={buttonVariant}
          style={styles.imageButton}
          RightIcon={RightIcon}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default CharacterCard;
