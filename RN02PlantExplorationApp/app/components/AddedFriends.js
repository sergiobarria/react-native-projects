import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {icons, SIZES, COLORS, FONTS} from '../constants';

import RenderFriends from './RenderFriends';

const AddedFriends = ({friendList}) => {
  return (
    <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
        }}>
        <View
          style={{
            marginTop: SIZES.radius,
            marginHorizontal: SIZES.padding,
          }}>
          <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
            Added Friends
          </Text>
          <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
            {friendList.length} total
          </Text>

          <View style={{flexDirection: 'row', height: '60%'}}>
            {/* Friends */}
            <View
              style={{
                flex: 1.3,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <RenderFriends friendList={friendList} />
            </View>

            {/* Add Friend */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                {' '}
                Add New
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.base,
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.gray,
                }}>
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddedFriends;
