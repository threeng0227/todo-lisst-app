import { Dimensions, PixelRatio, Platform } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const scaleWidth = (size: number) => wp(size);
export const scaleHeight = (size: number) => hp(size);

export const { width, height } = Dimensions.get('window');

const scale = width / 320;

export const normalize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};
