import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {icons, COLORS, SIZES, FONTS} from '../constants';

const RenderFooter = () => {
  return (
    <View
      style={{flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding}}>
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
          justifyContent: 'center',
          borderTopRightRadius: 30,
          backgroundColor: COLORS.primary,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h2}}>Take Action</Text>

        <Image
          source={icons.chevron}
          resizeMode="contain"
          style={{marginLeft: SIZES.padding, width: 20, height: 20}}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            flex: 1,
            color: COLORS.secondary,
            ...FONTS.h3,
          }}>
          Almost 2 weeks of growing time
        </Text>
        <Image
          source={icons.downArrow}
          resizeMode="contain"
          style={{
            tintColor: COLORS.secondary,
            marginLeft: SIZES.base,
            width: 20,
            height: 20,
          }}
        />
      </View>
    </View>
  );
};

export default RenderFooter;
