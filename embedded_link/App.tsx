import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStacks from './src/Navigation/MainStacks';

const App = () => {
  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
};

export default App;
