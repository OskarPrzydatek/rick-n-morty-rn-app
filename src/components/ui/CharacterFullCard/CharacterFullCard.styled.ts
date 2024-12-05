import {colors, fonts} from '@constants/styles';
import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: 24,

    ...Platform.select({
      ios: {
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
      },
    }),
  },
  image: {
    width: width - 80,
    height: width - 80,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: 24,
    alignSelf: 'center',
  },
  attributes: {
    gap: 24,
  },
  nameAttribute: {
    gap: 8,
  },
  nameLabel: {
    fontSize: 12,
    fontFamily: fonts.DMMono.regular,
    color: colors.mediumGreen,
  },
  nameValue: {
    fontSize: 36,
    fontFamily: fonts.Inter.regular,
    fontWeight: 500,
    color: colors.darkGreen,
  },
  attributesGrid: {
    gap: 16,
  },
  attributesGridRow: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  attribute: {
    flex: 1,
  },
});
