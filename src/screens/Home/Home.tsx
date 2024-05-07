import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Colors } from 'theme';

export const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View>
        <View style={{
          borderWidth: 1,
          borderColor: Colors.main,
          width: 40,
          height: 40,
          borderRadius: 40
        }}>

        </View>
        <Text>{'Hello,'}</Text>
      <Text>{'Three Ng'}</Text>
      </View>
    </View>
  );
};
