import React from 'react';
import {SafeAreaView, View, StyleSheet, Animated} from 'react-native';

// Components
import RenderDots from '../../components/RenderDots';
import RenderContent from '../../components/RenderContent';

// Constants
import {images, theme} from '../../constants';
const {onboarding1, onboarding2, onboarding3} = images;

// Theme
const {COLORS, SIZES} = theme;

// Dummy Data
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

export default function OnBoarding() {
  const [completed, setCompleted] = React.useState(false);
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    // To check if user has finished scrolling the onboarding pages
    scrollX.addListener(({value}) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <RenderContent scrollX={scrollX} completed={completed} />
      </View>
      <View style={styles.dotsRootContainer}>
        <RenderDots scrollX={scrollX} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '20%',
  },
});
