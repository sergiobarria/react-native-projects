import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';

import {icons, COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
  },
};

const CameraButton = () => {
  return (
    <View style={styles.camButton}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={styles.camIcon}
      />
    </View>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={[{tintColor: tintColor}, styles.tabIcon]}
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={[{tintColor: tintColor}, styles.tabIcon]}
                />
              );
            case 'Camera':
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={[{tintColor: tintColor}, styles.tabIcon]}
                />
              );
            case 'Favorite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={[{tintColor: tintColor}, styles.tabIcon]}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favorite" component={Home} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
  camButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
  },
  camIcon: {
    width: 23,
    height: 23,
  },
});
