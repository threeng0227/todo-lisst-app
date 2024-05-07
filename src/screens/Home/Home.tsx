import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { Colors } from 'theme';
import { AppImages } from 'assets';
import { AppStyles } from 'theme/styles';
import { ACTIVE_OPACITY, FONTS, PADDING, SPACING, width } from 'utils';
import { CATEGORY } from 'mock';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewAvatar}>
          <Image source={AppImages.AVATAR} style={styles.avatar} />
        </View>
        <View>
          <Text style={AppStyles.textMedium}>{'Hello,'}</Text>
          <Text style={AppStyles.textBold}>{'Three Ng'}</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={[AppStyles.textMedium, {
          marginTop: SPACING,
          marginHorizontal: PADDING,
        }]}>{'Let’s check out your today’s task'}</Text>
        {/* Task to do */}
        <View style={styles.viewTask}>
          <View>
            <Text style={[AppStyles.textBold, {
              fontSize: FONTS.small,
              color: Colors.white
            }]}>{'62.5% completed'}</Text>
            <View style={styles.progress}>
              <View style={styles.progressPosition} />
            </View>
          </View>
          <Text style={[AppStyles.textBold, { color: Colors.white }]}>{`You have 3 more\ntasks to do!`}</Text>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            style={styles.btnDetails}>
            <Text style={[AppStyles.textSemibold, { fontSize: FONTS.regular }]}>{'Details'}</Text>
          </TouchableOpacity>
        </View>
        {/* Task categories */}
        <Text style={[AppStyles.textMedium, {
          marginTop: SPACING * 2,
          marginHorizontal: PADDING,
        }]}>{'Task categories'}</Text>
        <View style={styles.category}>
          {CATEGORY.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={ACTIVE_OPACITY}
                key={`category${index}`} style={styles.itemCategory}>
                <View style={styles.viewInfor}>
                  <Text style={AppStyles.textBold}>{item.name}</Text>
                  <Text style={AppStyles.textMedium}>{`${item.task} tasks`}</Text>
                </View>
                <item.icon />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
