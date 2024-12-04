import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import BackArrowIcon from '@assets/svg/back-arrow.svg';
import {colors} from '@constants/styles';
import {CharacterFullCard, LoadingView} from '@components/ui';
import useCharacterDetails from './useCharacterDetails.service';

const CharacterDetailsScreen = () => {
  const {data, isLoading, onPressGoBackToCharactersList} =
    useCharacterDetails();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.backButton}
        onPress={onPressGoBackToCharactersList}>
        <BackArrowIcon width={12} height={12} color={colors.mediumGreen} />

        <Text style={styles.backButtonLabel}>Go back to Characters List</Text>
      </TouchableOpacity>

      {isLoading ? (
        <LoadingView />
      ) : (
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
          <CharacterFullCard
            image={data?.image}
            name={data?.name}
            status={data?.status}
            originName={data?.origin.name}
            species={data?.species}
            gender={data?.gender}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetailsScreen;
