import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../component/Home';
import MainApp from '../component/MainApp';

const Stack = createStackNavigator();

function MainStacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="mainApp" component={MainApp} />
    </Stack.Navigator>
  );
}

export default MainStacks;
