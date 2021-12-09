import React from 'react';
import { Text } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

export default function MainLayout() {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...animatedStyle,
      }}>
      <Text>MainLayout</Text>
    </Animated.View>
  );
}
