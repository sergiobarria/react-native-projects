import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';

// Constants
import {images, theme} from '../constants';
const {onboarding1, onboarding2, onboarding3} = images;
// import {onBoardings} from '../constants';

// Theme
const {COLORS, SIZES} = theme;

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

const renderDots = ({scrollX}) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);

  return (
    <View style={styles.dotContainer}>
      {onBoardings.map((item, index) => {
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [SIZES.base, 17, SIZES.base],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            opacity={opacity}
            style={[styles.dot, {width: dotSize, height: dotSize}]}
          />
        );
      })}
    </View>
  );
};

export default renderDots;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
});
