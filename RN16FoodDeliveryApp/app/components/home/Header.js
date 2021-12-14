import React from 'react';
import { View, Text } from 'react-native';
import { FONTS } from '../../constants';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

export default function Header({ containerStyle, title, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Left */}
      <LeftComponent navigation={navigation} />

      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ ...FONTS.h3 }}>{title}</Text>
      </View>

      {/* Right */}
      <RightComponent />
    </View>
  );
}
