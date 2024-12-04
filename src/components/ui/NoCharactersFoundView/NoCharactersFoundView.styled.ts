import {colors, fonts} from '@constants/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  label: {
    fontSize: 24,
    fontFamily: fonts.Inter.bold,
    color: colors.darkGreen,
    textAlign: 'center',
  },
});
