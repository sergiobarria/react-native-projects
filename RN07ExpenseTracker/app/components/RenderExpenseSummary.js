import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

import processCategoryDataToDisplay from '../helpers/processCatData';
import setSelectedCategoryByName from '../helpers/setSelectedCatByName';

export default function RenderExpenseSummary({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  let data = processCategoryDataToDisplay(categories);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name === item.name
              ? item.color
              : COLORS.white,
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectedCategoryByName(
            categoryName,
            categories,
            setSelectedCategory,
          );
        }}>
        {/* Name - Category */}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name === item.name
                  ? COLORS.white
                  : item.color,
              borderRadius: 5,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              color:
                selectedCategory && selectedCategory.name === item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}>
            {item.name}
          </Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              color:
                selectedCategory && selectedCategory.name === item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}>
            {item.y} USD - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ padding: SIZES.padding }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
