import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import * as Screens from 'screens';
import { navigationRef } from '../services/NavigationService';
import { StatusBar } from 'react-native';
import { BottomTabNavigation } from './BottomTabNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ToastConfig } from 'components/ToastComponent';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle={'light-content'}
          translucent
          backgroundColor={'rgba(52, 52, 52, 0.1)'}
        />
          <Stack.Navigator
            initialRouteName={Routes.Main}
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_right',
            }}
          >
            {/* <Stack.Screen name={Routes.Home} component={Screens.HomeScreen} /> */}
            <Stack.Screen name={Routes.Main} component={BottomTabNavigation} />
            {/* <Stack.Screen
              name={Routes.Home}
              component={Screens.HomeScreen}
            />
            <Stack.Screen
              options={{
                animation: 'slide_from_bottom',
              }}
              name={Routes.Home}
              component={Screens.HomeScreen}
            /> */}
            </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export const Navigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer ref={navigationRef}>
       <GestureHandlerRootView style={{ flex: 1 }}>
            <StackNavigator />
            <Toast position="top" config={ToastConfig} topOffset={insets.top} />
          </GestureHandlerRootView>
    </NavigationContainer>
  );
};
