import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

// Screens
import {PlantDetail} from './app/screens';

// Tabs
import Tabs from './app/navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />

        {/* Screens */}
        <Stack.Screen
          name="PlantDetail"
          component={PlantDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => <App />;
