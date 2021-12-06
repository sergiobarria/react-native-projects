import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

export default function RenderCategoryList({
  categories,
  setSelectedCategory,
  showMoreToggle,
  setShowMoreToggle,
  categoryListHeightAnimationValue,
}) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 5,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
        onPress={() => setSelectedCategory(item)}>
        <Image
          source={item.icon}
          style={{ width: 20, height: 20, tintColor: item.color }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.primary,
            ...FONTS.h4,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
      <View>
        <Animated.View style={{ height: categoryListHeightAnimationValue }}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
          />
        </Animated.View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.base,
          justifyContent: 'center',
        }}
        onPress={() => {
          if (showMoreToggle) {
            Animated.timing(categoryListHeightAnimationValue, {
              toValue: 115,
              duration: 500,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.timing(categoryListHeightAnimationValue, {
              toValue: 172.5,
              duration: 500,
              useNativeDriver: false,
            }).start();
          }

          setShowMoreToggle(!showMoreToggle);
        }}>
        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>
          {showMoreToggle ? 'LESS' : 'MORE'}
        </Text>
        <Image
          source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
          style={{
            tintColor: COLORS.darkgray,
            marginLeft: 5,
            width: 15,
            height: 15,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
