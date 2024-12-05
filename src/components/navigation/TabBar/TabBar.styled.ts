import {colors, fonts} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    backgroundColor: colors.darkGreen,
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  label: {
    fontFamily: fonts.DMMono.regular,
  },
});
