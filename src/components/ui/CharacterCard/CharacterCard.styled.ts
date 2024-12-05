import {colors} from '@constants/styles';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: colors.lightGreen,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: 24,
    padding: 12,
    shadowColor: colors.primaryGreen,

    ...Platform.select({
      ios: {
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
      },
    }),
  },
  characterAttributes: {
    width: '35%',
  },
  imageContainer: {
    borderRadius: 24,
    position: 'relative',
    width: 200,
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.darkGreen,
  },
  imageButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
