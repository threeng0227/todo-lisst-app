import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from 'theme';
import { PADDING, normalize, scaleWidth, width } from 'utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  seeMoreLabel: {
    fontFamily: Fonts.mediumItalic,
    fontSize: normalize(11),
    textAlign: 'right',
    marginTop: PADDING / 2,
    textDecorationLine: 'underline',
  },
  titleBanner: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: PADDING,
  },
  banner: {
    width: width - PADDING * 2,
    height: 130,
    borderRadius: 10,
  },
  product: {
    width: 170,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Grey350,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    paddingHorizontal: 7,
    marginLeft: PADDING,
  },
  productSize: {
    height: 150,
    width: '100%',
  },
  btnAddCart: {
    borderRadius: 10,
    paddingVertical: 8,
    width: '85%',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtAddCart: {
    fontFamily: Fonts.semibold,
    fontSize: normalize(10),
    color: Colors.white,
  },
  viewSales: {
    width: '45%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    left: -1,
    top: -1,
  },
  txtSales: {
    fontFamily: Fonts.semibold,
    fontSize: normalize(10),
    color: Colors.white,
  },
  txtBrand: {
    fontFamily: Fonts.semibold,
    fontSize: 18,
    paddingHorizontal: PADDING,
  },
});
