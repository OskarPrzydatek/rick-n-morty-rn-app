import {colors, fonts} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 100,
  },
  primary: {
    backgroundColor: colors.white,
    borderColor: colors.darkGreen,
  },
  secondary: {
    backgroundColor: colors.primaryGreen,
    borderColor: colors.primaryGreen,
  },
  tetriary: {
    backgroundColor: colors.greyshGreen,
    borderColor: colors.darkGreen,
  },
  quaternary: {
    backgroundColor: colors.darkGreen,
    borderColor: colors.darkGreen,
  },
  label: {
    fontFamily: fonts.DMMono.regular,
    fontSize: 14,
  },
  lightLabel: {
    color: colors.white,
  },
  darkLabel: {
    color: colors.primaryGreen,
  },
});
