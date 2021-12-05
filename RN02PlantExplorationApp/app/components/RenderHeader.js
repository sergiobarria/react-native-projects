import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {icons, images, COLORS, SIZES, FONTS} from '../constants';

const RenderHeader = ({navigation}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 50,
        left: SIZES.padding,
        right: SIZES.padding,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
          onPress={() => console.log('Focus on pressed')}>
          <Image
            source={icons.focus}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: '10%'}}>
        <View style={{flex: 1}}>
          <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
            Glory Mantas
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    </View>
  );
};

export default RenderHeader;
