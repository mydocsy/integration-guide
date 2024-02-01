import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackIcon from '../res/svg/BackIcon';

const Header = ({onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPress} style={styles.iconView}>
          <BackIcon color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}>Latest Mind Scores</Text>
      </View>
      <View style={styles.emtyView} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    height: '7%',
    flexDirection: 'row',
  },
  iconContainer: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
  },
  titleContainer: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  emtyView: {
    height: '100%',
    width: '20%',
  },
  iconView: {
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    marginLeft: '8%',
  },
});
