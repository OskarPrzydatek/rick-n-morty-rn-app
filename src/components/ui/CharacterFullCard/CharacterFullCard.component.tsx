import React from 'react';
import {Gender, Status} from '@api/models';
import {Image, Text, View} from 'react-native';
import {CharacterAttribute} from '@components/ui';
import {styles} from './CharacterFullCard.styled';

interface CharacterFullCardProps {
  image: string;
  name: string;
  status: Status;
  originName: string;
  species: string;
  gender: Gender;
}

const CharacterFullCard = ({
  image,
  name,
  status,
  originName,
  species,
  gender,
}: CharacterFullCardProps) => {
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
      </View>
    </View>
  );
};

export default CharacterFullCard;
