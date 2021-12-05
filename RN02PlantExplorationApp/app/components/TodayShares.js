import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import {images, COLORS, SIZES, FONTS} from '../constants';

const TodaysShares = ({navigation}) => {
  return (
    <View style={styles.todayShareContainer}>
      <View style={styles.sectionContainer}>
        <View style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
          <View style={styles.sectionHeader}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Today's Share
            </Text>
            <TouchableOpacity onPress={() => console.log('See All on Pressed')}>
              <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <View style={styles.flexOne}>
              <TouchableOpacity
                style={styles.flexOne}
                onPress={() => {
                  navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={styles.gridImg}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.imgOneContainer}
                onPress={() => {
                  navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.plant6}
                  resizeMode="cover"
                  style={styles.gridImg}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.lgImg}>
              <TouchableOpacity
                style={styles.colTwo}
                onPress={() => {
                  navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.plant7}
                  resizeMode="cover"
                  style={styles.gridImg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodaysShares;

const styles = StyleSheet.create({
  todayShareContainer: {
    height: '50%',
    backgroundColor: COLORS.lightGray,
  },
  sectionContainer: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.white,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grid: {
    flexDirection: 'row',
    height: '88%',
    marginTop: SIZES.base,
  },
  flexOne: {
    flex: 1,
  },
  imgOneContainer: {
    flex: 1,
    marginTop: SIZES.font,
  },
  gridImg: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  colTwo: {
    flex: 1,
    marginLeft: SIZES.font,
  },
  lgImg: {
    flex: 1.3,
  },
});
