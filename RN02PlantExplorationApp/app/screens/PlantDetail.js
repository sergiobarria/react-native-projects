import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {icons, images, COLORS, SIZES, FONTS} from '../constants';
import RenderRequirementsBar from '../components/RenderRequirementsBar';
import RenderRequirements from '../components/RenderRequirements';
import RenderFooter from '../components/RenderFooter';
import RenderHeader from '../components/RenderHeader';

export default function PlantDetail({navigation}) {
  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{height: '35%'}}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      {/* Requirements */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            color: COLORS.secondary,
            ...FONTS.h1,
          }}>
          Requirements
        </Text>

        <RenderRequirementsBar />

        <RenderRequirements />

        <RenderFooter />
      </View>

      <RenderHeader navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
