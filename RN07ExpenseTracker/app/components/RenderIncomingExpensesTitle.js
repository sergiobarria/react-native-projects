import React from 'react';
import { View, Text } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

export default function RenderIncomingExpensesTitle() {
  return (
    <View
      style={{ padding: SIZES.padding, backgroundColor: COLORS.lightGray2 }}>
      <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
        INCOMING EXPENSES
      </Text>
      <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
    </View>
  );
}
