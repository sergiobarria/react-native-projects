import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';

import {icons, COLORS, SIZES, FONTS} from '../constants';

const renderNewPlants = ({item}) => {
  return (
    <View style={styles.plantCard}>
      <Image source={item.img} resizeMode="cover" style={styles.plantCardImg} />

      <View style={styles.plantLabel}>
        <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
      </View>

      <TouchableOpacity
        style={styles.plantFavorite}
        onPress={() => console.log('Favourite On Pressed')}>
        <Image
          source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
          resizeMode="contain"
          style={styles.favoriteHeartImg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default renderNewPlants;

const styles = StyleSheet.create({
  plantCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.base,
  },
  plantCardImg: {
    width: SIZES.width * 0.23,
    height: '82%',
    borderRadius: 15,
  },
  plantLabel: {
    position: 'absolute',
    bottom: '17%',
    right: 0,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.base,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  plantFavorite: {
    position: 'absolute',
    top: '15%',
    left: 7,
  },
  favoriteHeartImg: {
    width: 20,
    height: 20,
  },
});
