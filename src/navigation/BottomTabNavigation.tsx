import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './Routes';
import { Alert, Animated, Platform, Pressable, StyleSheet, View } from 'react-native';
import * as Screens from 'screens';
import { BOTTOM_SIZE } from 'utils';
import { Colors, Fonts } from 'theme';
import RemixIcon from 'react-native-remix-icon';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  const FocusBorder = ({ focused }: { focused: boolean }) => {
    const animatedWidth = useRef(new Animated.Value(0)).current;
    const focusWidth = () => {
      Animated.timing(animatedWidth, {
        toValue: 5,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const loseFocus = () => {
      Animated.timing(animatedWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    useEffect(() => {
      if (focused) {
        focusWidth();
      } else {
        loseFocus();
      }
    }, [focused]);

    return (
      <Animated.View
        style={[
          styles.focus,
          {
            backgroundColor: Colors.main,
            transform: [{ scaleX: animatedWidth }],
          },
        ]}
      />
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarContainer,
        lazy: true,
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={styles.bottomItem}>
                <RemixIcon
                  name={'home-8-line'}
                  color={focused ? Colors.main : Colors.grey_600}
                  size={BOTTOM_SIZE}
                />
                 {focused && <FocusBorder focused={focused} />}
            </View>
          ),
        }}
        name={Routes.Home}
        component={Screens.HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={styles.bottomItem}>
              <RemixIcon
                name={'stack-line'}
                size={BOTTOM_SIZE}
                color={focused ? Colors.main : Colors.grey_600}
              />
              {focused && <FocusBorder focused={focused} />}
            </View>
          ),
        }}
        name={Routes.Calendar}
        component={Screens.HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Pressable style={styles.bottomItem} onPress={() => Alert.alert('dmdmdmdmd')}>
              <RemixIcon
                name={'shopping-bag-3-line'}
                size={BOTTOM_SIZE}
                color={focused ? Colors.main : Colors.grey_600}
              />
              {focused && <FocusBorder focused={focused} />}
            </Pressable>
          ),
        }}
        name={Routes.AddTask}
        component={Screens.HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={styles.bottomItem}>
              <RemixIcon
                name={'service-line'}
                size={BOTTOM_SIZE}
                color={focused ? Colors.main : Colors.grey_600}
              />
              {focused && <FocusBorder focused={focused} />}
            </View>
          ),
        }}
        name={Routes.Notification}
        component={Screens.HomeScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }: any) => (
            <View style={styles.bottomItem}>
              <RemixIcon
                name="account-circle-line"
                size={BOTTOM_SIZE + 5}
                color={focused ? Colors.main : Colors.grey_600}
              />
              {focused && <FocusBorder focused={focused} />}
            </View>
          ),
        }}
        name={Routes.Personal}
        component={Screens.HomeScreen}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingTop: Platform.OS === 'ios' ? 15 : 5,
    justifyContent: 'center',
    borderTopWidth: 0,
    position: 'relative',
    zIndex: 0,
    height: Platform.OS === 'android' ? 70 : 80,
  },
  bottomItem: {
    alignItems: 'center',
  },
  tabLabel: {
    color: 'black',
    marginTop: 5,
  },
  focus: {
    width: 5,
    height: 3,
    marginTop: 5,
    borderRadius: 1,
  },
  logoImg: {
    width: 60,
    height: 50,
    resizeMode: 'stretch',
    aspectRatio: 16 / 9,
  },
  cartBadge: {
    top: 5,
    fontFamily: Fonts.semibold,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    overflow: 'hidden',
  },
});
