import React from 'react';
import { View, Text } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';

// Import screens
import {
  HomeScreen,
  SearchScreen,
  CartTabScreen,
  FavouriteScreen,
  NotificationScreen,
} from '../screens';

import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from '../constants';

// Components
import Header from '../components/home/Header';
import BottomTabs from '../navigation/BottomTabs';

const MainLayout = ({ navigation, selectedTab, setSelectedTab }) => {
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

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...animatedStyle,
      }}>
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        navigation={navigation}
      />

      {/* Content */}
      <View
        style={{
          flex: 1,
        }}>
        <Text>MainLayout</Text>
      </View>

      {/* Footer */}
      <BottomTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
