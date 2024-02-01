import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Home</Text>
      <Button
        onPress={() => navigation.navigate('mainApp')}
        title="Go To WebView"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
