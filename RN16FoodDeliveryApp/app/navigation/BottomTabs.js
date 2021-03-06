import React from 'react';
import { View } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS, SIZES, icons, constants } from '../constants';

import TabButton from '../components/home/TabButton';

export default function BottomTabs({ selectedTab, setSelectedTab }) {
  // Bottom tabs animation
  // Reanimated shared value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Animated Style
  const homeFlexStyle = useAnimatedStyle(() => ({ flex: homeTabFlex.value }));
  const homeColorStyle = useAnimatedStyle(() => ({
    backgroundColor: homeTabColor.value,
  }));
  const searchFlexStyle = useAnimatedStyle(() => ({
    flex: searchTabFlex.value,
  }));
  const searchColorStyle = useAnimatedStyle(() => ({
    backgroundColor: searchTabColor.value,
  }));
  const cartFlexStyle = useAnimatedStyle(() => ({ flex: cartTabFlex.value }));
  const cartColorStyle = useAnimatedStyle(() => ({
    backgroundColor: cartTabColor.value,
  }));
  const favouriteFlexStyle = useAnimatedStyle(() => ({
    flex: favouriteTabFlex.value,
  }));
  const favouriteColorStyle = useAnimatedStyle(() => ({
    backgroundColor: favouriteTabColor.value,
  }));
  const notificationFlexStyle = useAnimatedStyle(() => ({
    flex: notificationTabFlex.value,
  }));
  const notificationColorStyle = useAnimatedStyle(() => ({
    backgroundColor: notificationTabColor.value,
  }));

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  React.useEffect(() => {
    if (selectedTab === constants.screens.home) {
      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.search) {
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.cart) {
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.favourite) {
      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab === constants.screens.notification) {
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
  }, [selectedTab]);

  return (
    <View
      style={{
        height: 100,
        justifyContent: 'flex-end',
      }}>
      {/* Shadow */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 4 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: 'absolute',
          top: -20,
          left: 0,
          right: 0,
          height: 100,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />

      {/* Tabs */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.radius,
          paddingBottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}>
        <TabButton
          label={constants.screens.home}
          icon={icons.home}
          isFocused={selectedTab === constants.screens.home}
          outerContainerStyle={homeFlexStyle}
          innerContainerStyle={homeColorStyle}
          onPress={() => setSelectedTab(constants.screens.home)}
        />
        <TabButton
          label={constants.screens.search}
          icon={icons.search}
          isFocused={selectedTab === constants.screens.search}
          outerContainerStyle={searchFlexStyle}
          innerContainerStyle={searchColorStyle}
          onPress={() => setSelectedTab(constants.screens.search)}
        />
        <TabButton
          label={constants.screens.cart}
          icon={icons.cart}
          isFocused={selectedTab === constants.screens.cart}
          outerContainerStyle={cartFlexStyle}
          innerContainerStyle={cartColorStyle}
          onPress={() => setSelectedTab(constants.screens.cart)}
        />
        <TabButton
          label={constants.screens.favourite}
          icon={icons.favourite}
          isFocused={selectedTab === constants.screens.favourite}
          outerContainerStyle={favouriteFlexStyle}
          innerContainerStyle={favouriteColorStyle}
          onPress={() => setSelectedTab(constants.screens.favourite)}
        />
        <TabButton
          label={constants.screens.notification}
          icon={icons.notification}
          isFocused={selectedTab === constants.screens.notification}
          outerContainerStyle={notificationFlexStyle}
          innerContainerStyle={notificationColorStyle}
          onPress={() => setSelectedTab(constants.screens.notification)}
        />
      </View>
    </View>
  );
}
