import React from 'react';
import {Gender, Status} from '@api/models';
import {Image, Text, View} from 'react-native';
import {Button, CharacterAttribute} from '@components/ui';
import {styles} from './CharacterFullCard.styled';
import {colors} from '@constants/styles';
import FullfiledStarIcon from '@assets/svg/favorites_tab_icon.svg';
import StarIcon from '@assets/svg/star.svg';

interface CharacterFullCardProps {
  image: string;
  name: string;
  status: Status;
  originName: string;
  species: string;
  gender: Gender;
  isCharacterInFavorites: boolean;
  onPressFavoritesButton: () => void;
}

const CharacterFullCard = ({
  image,
  name,
  status,
  originName,
  species,
  gender,
  isCharacterInFavorites,
  onPressFavoritesButton,
}: CharacterFullCardProps) => {
  const favoritesButtonLabel = isCharacterInFavorites
    ? 'REMOVE FROM LIKED'
    : 'ADD TO LIKED';

  const RightIcon = isCharacterInFavorites ? (
    <FullfiledStarIcon color={colors.accent} width={16} height={16} />
  ) : (
    <StarIcon color={colors.white} width={16} height={16} />
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      <View style={styles.attributes}>
        <View style={styles.nameAttribute}>
          <Text style={styles.nameLabel}>NAME</Text>

          <Text style={styles.nameValue}>{name}</Text>
        </View>

        <View style={styles.attributesGrid}>
          <View style={styles.attributesGridRow}>
            <CharacterAttribute
              label="STATUS"
              value={status}
              style={styles.attribute}
            />

            <CharacterAttribute
              label="ORIGIN"
              value={originName}
              style={styles.attribute}
            />
          </View>

          <View style={styles.attributesGridRow}>
            <CharacterAttribute
              label="SPECIES"
              value={species}
              style={styles.attribute}
            />

            <CharacterAttribute
              label="GENDER"
              value={gender}
              style={styles.attribute}
            />
          </View>
        </View>

        <Button
          label={favoritesButtonLabel}
          variant="secondary"
          RightIcon={RightIcon}
          onPress={onPressFavoritesButton}
        />
      </View>
    </View>
  );
};

export default CharacterFullCard;
