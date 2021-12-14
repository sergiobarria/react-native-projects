import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { COLORS, icons, SIZES } from '../../constants';

export default function LeftComponent({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray2,
        borderRadius: SIZES.radius,
      }}
      onPress={() => navigation.openDrawer()}>
      <Image source={icons.menu} />
    </TouchableOpacity>
  );
}
