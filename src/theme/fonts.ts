import { Platform } from 'react-native';

export const Fonts = {
  regular: Platform.OS === 'ios' ? 'Montserrat' : 'Montserrat-Regular',
  medium: Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Medium',
  semibold:
    Platform.OS === 'ios' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold',
  bold: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat-Bold',
  //Italic
  italic: Platform.OS === 'ios' ? 'Montserrat-Italic' : 'Montserrat-Italic',
  mediumItalic:
    Platform.OS === 'ios'
      ? 'Montserrat-MediumItalic'
      : 'Montserrat-MediumItalic',
  semiBoldItalic:
    Platform.OS === 'ios'
      ? 'Montserrat-SemiBoldItalic'
      : 'Montserrat-SemiBoldItalic',
  boldItalic:
    Platform.OS === 'ios' ? 'Montserrat-BoldItalic' : 'Montserrat-BoldItalic',
  black: 'Montserrat-Black',
};
