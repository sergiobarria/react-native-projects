import React from 'react';
import {StyleSheet, View, Animated, Text, Image} from 'react-native';

// Components
import Button from './Button';

// Constants
import {images, theme} from '../constants';
const {onboarding1, onboarding2, onboarding3} = images;

// Theme
const {COLORS, FONTS, SIZES} = theme;

const onBoardings = [
  {
    title: "Let's Travelling",
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding1,
  },
  {
    title: 'Navigation',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding2,
  },
  {
    title: 'Destination',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    img: onboarding3,
  },
];

const RenderContent = ({scrollX, completed}) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}>
      {onBoardings.map((item, index) => (
        <View key={index} style={{width: SIZES.width}}>
          {/* Image */}
          <View style={styles.imageContainer}>
            <Image source={item.img} resizeMode="cover" style={styles.image} />
          </View>

          {/* Text */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          {/* Button */}
          <Button completed={completed} />
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default RenderContent;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: '10%',
    left: 40,
    right: 40,
  },
  title: {
    ...FONTS.h1,
    color: COLORS.gray,
    textAlign: 'center',
  },
  description: {
    ...FONTS.body3,
    textAlign: 'center',
    marginTop: SIZES.base,
    color: COLORS.gray,
  },
});
