import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {COLORS, FONTS} from '../constants';

const RenderFriends = ({friendList}) => {
  if (friendList.length === 0) {
    return <View />;
  } else if (friendList.length <= 3) {
    return friendList.map((item, index) => (
      <View
        key={`friend-${index}`}
        style={
          index === 0
            ? {flexDirection: 'row'}
            : {flexDirection: 'row', marginLeft: -20}
        }>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 3,
            borderColor: COLORS.primary,
          }}
        />
      </View>
    ));
  } else {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {friendList.map((item, index) => {
          if (index <= 2) {
            return (
              <View
                key={`friend-${index}`}
                style={index === 0 ? {} : {marginLeft: -20}}>
                <Image
                  source={item.img}
                  resizeMode="cover"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 3,
                    borderColor: COLORS.primary,
                  }}
                />
              </View>
            );
          }
        })}

        <Text style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>
          +{friendList.length - 3}
        </Text>
      </View>
    );
  }
};

export default RenderFriends;

const styles = StyleSheet.create({});
