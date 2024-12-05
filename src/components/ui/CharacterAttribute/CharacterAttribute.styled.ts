import {colors, fonts} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    gap: 4,
    backgroundColor: colors.lightGreen,
    borderRadius: 10,
  },
  label: {
    color: colors.mediumGreen,
    fontSize: 12,
    fontFamily: fonts.DMMono.medium,
  },
  value: {
    color: colors.darkGreen,
    fontSize: 16,
    fontFamily: fonts.Inter.regular,
  },
});
