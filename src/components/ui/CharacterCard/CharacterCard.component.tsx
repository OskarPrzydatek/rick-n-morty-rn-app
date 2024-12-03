import React from 'react';
import {Status} from '@api/models';
import {Image, View} from 'react-native';
import {styles} from './CharacterCard.styled';
import {CharacterAttribute} from '@components/ui';

interface CharacterCardProps {
  name: string;
  status: Status;
  species: string;
  image: string;
}

const CharacterCard = ({name, status, species, image}: CharacterCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.characterAttributes}>
        <CharacterAttribute label="NAME" value={name} />

        <CharacterAttribute label="STATUS" value={status} />

        <CharacterAttribute label="SPECIES" value={species} />
      </View>

      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default CharacterCard;
