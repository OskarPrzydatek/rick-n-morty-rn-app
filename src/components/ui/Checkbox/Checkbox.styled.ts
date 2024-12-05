import {colors, fonts} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  checked: {
    borderColor: colors.darkGreen,
    backgroundColor: colors.darkGreen,
  },
  unchecked: {
    borderColor: colors.greyshGreen,
    backgroundColor: colors.white,
  },
  label: {
    fontFamily: fonts.Inter.regular,
    fontSize: 16,
    color: colors.darkGreen,
  },
});
