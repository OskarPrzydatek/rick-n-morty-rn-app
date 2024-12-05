import {colors, fonts} from '@constants/styles';
import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 16,
  },
  header: {
    fontSize: 36,
    fontFamily: fonts.Inter.medium,
  },
  showFiltersButton: {
    alignSelf: 'flex-start',
  },

  filters: {
    position: 'relative',
  },
  filterButton: {
    alignSelf: 'flex-start',
    gap: 12,
  },
  filtersContainer: {
    position: 'absolute',
    top: 42,
    width: '100%',
    padding: 16,
    gap: 24,
    borderWidth: 1,
    borderColor: colors.darkGreen,
    borderRadius: 12,
    backgroundColor: colors.white,
    zIndex: 10,

    ...Platform.select({
      ios: {
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
      },
    }),
  },
  filterSection: {
    gap: 12,
  },
  filterStatusLabel: {
    fontFamily: fonts.DMMono.medium,
    fontSize: 14,
    color: colors.mediumGreen,
  },
  filtersActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
