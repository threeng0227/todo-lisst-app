import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToastMessage, {
  BaseToast,
  ErrorToast,
} from 'react-native-toast-message';
import { Colors, Fonts } from 'theme';
import { normalize } from 'utils';
class ToastClass {
  error(text?: string) {
    ToastMessage.show({
      text1: 'Error',
      text2: text ?? '',
      type: 'error',
      visibilityTime: VISIBILITY_TIME,
    });
  }
  success(text?: string) {
    ToastMessage.show({
      text1: 'Success',
      text2: text ?? '',
      type: 'success',
      visibilityTime: VISIBILITY_TIME,
    });
  }
  info(text?: string) {
    ToastMessage.show({
      text1: 'Message',
      text2: text ?? '',
      type: 'info',
      visibilityTime: VISIBILITY_TIME,
    });
  }
}
const Toast = new ToastClass();
const VISIBILITY_TIME = 1500;
export const ToastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={styles.txtTitle}
      text2Style={styles.txtDescription}
      renderLeadingIcon={() => <View style={styles.error} />}
    />
  ),
  success: (props: any) => (
    <BaseToast
      {...props}
      text1Style={styles.txtTitle}
      text2Style={styles.txtDescription}
      renderLeadingIcon={() => (
        <View style={[styles.error, { backgroundColor: Colors.success }]} />
      )}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      text1Style={styles.txtTitle}
      text2Style={styles.txtDescription}
      renderLeadingIcon={() => (
        <View style={[styles.error, { backgroundColor: Colors.yellowLight }]} />
      )}
    />
  ),
};
const styles = StyleSheet.create({
  txtTitle: {
    fontSize: normalize(12),
    fontFamily: Fonts.medium,
  },
  txtDescription: {
    fontSize: normalize(10),
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  error: {
    backgroundColor: Colors.extra,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: '100%',
    width: 6,
    position: 'absolute',
    left: -5,
  },
});
export default Toast;
