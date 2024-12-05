import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

export const colors = {
  primaryGreen: '#224229',
  lightGreen: '#F4F6F5',
  mediumGreen: '#59695C',
  darkGreen: '#162C1B',
  greyshGreen: '#DAE4DC',
  white: '#FFFFFF',
  accent: '#F89F34',
};

export const fonts = {
  DMMono: {
    light: isIOS ? 'DMMono-Light' : 'DMMonoLight',
    regular: isIOS ? 'DMMono-Regular' : 'DMMonoRegular',
    medium: isIOS ? 'DMMono-Medium' : 'DMMonoMedium',
  },
  Inter: {
    regular: isIOS ? 'Inter-Regular' : 'InterRegular',
    medium: isIOS ? 'Inter-Medium' : 'InterMedium',
    bold: isIOS ? 'Inter-Bold' : 'InterBold',
  },
};
