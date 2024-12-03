import {Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';

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
