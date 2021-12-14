import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { dummyData, SIZES } from '../../constants';

export default function LeftComponent({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: SIZES.radius,
      }}>
      <Image
        source={dummyData?.myProfile?.profile_image}
        style={{
          width: 40,
          height: 40,
          borderRadius: SIZES.radius,
        }}
      />
    </TouchableOpacity>
  );
}
