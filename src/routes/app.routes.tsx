import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Projects} from '../screens/Projects';
import {Donate} from '../screens/Donate';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#312e38'},
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="Donate" component={Donate} />
    </Stack.Navigator>
  );
}
