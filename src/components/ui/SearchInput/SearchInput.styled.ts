import {colors, fonts} from '@constants/styles';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: 100,

    ...Platform.select({
      ios: {
        padding: 12,
      },
      android: {
        paddingHorizontal: 12,
      },
    }),
  },
  input: {
    flex: 1,
    lineHeight: 18,
    fontFamily: fonts.Inter.regular,
  },
});
