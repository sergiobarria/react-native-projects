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
import RenderIncomingExpensesTitle from './RenderIncomingExpensesTitle';

export default function RenderIncomingExpenses({ selectedCategory }) {
  let allExpenses = selectedCategory ? selectedCategory.expenses : [];
  // console.log(allExpenses);

  // Filter pending expenses
  let incomingExpenses = allExpenses.filter(a => a.status === 'P');
  console.log(incomingExpenses);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: 300,
          marginRight: SIZES.padding,
          marginLeft: index === 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
            padding: SIZES.padding,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: COLORS.lightGray,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: SIZES.base,
            }}>
            <Image
              source={selectedCategory.icon}
              style={{
                width: 30,
                height: 30,
                tintColor: selectedCategory.color,
              }}
            />
          </View>

          <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>
            {selectedCategory.name}
          </Text>
        </View>

        {/* Expenses Description */}
        <View style={{ paddingHorizontal: SIZES.padding }}>
          {/* Title and description */}
          <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
          <Text style={{ ...FONTS.body3 }}>{item.description}</Text>

          {/* Location */}
          <Text style={{ marginTop: SIZES.padding, ...FONTS.h4 }}>
            Location
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={icons.pin}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                marginBottom: SIZES.base,
                color: COLORS.darkgray,
                ...FONTS.body4,
              }}>
              {item.location}
            </Text>
          </View>
        </View>

        {/* Price */}
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
            backgroundColor: selectedCategory.color,
          }}>
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
            CONFIRM {item.total.toFixed(2)} USD{' '}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <RenderIncomingExpensesTitle />

      {incomingExpenses.length > 0 && (
        <FlatList
          data={incomingExpenses}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

      {incomingExpenses.length === 0 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
          }}>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
        </View>
      )}
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
