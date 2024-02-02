// AppComponents.js
import React, { useRef, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WebView from 'react-native-webview';
import BackIcon from './path-to-your-icon';

// Header Component
const Header = ({ onPress }) => {
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

// Home Component
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Home</Text>
      <Button
        onPress={() => navigation.navigate('mainApp')}
        title="Go To WebView"
      />
    </View>
  );
};

// MainApp Component
const MainApp = ({ navigation }) => {
  const webViewRef = useRef(null);
  const [isDashboard, setIsDashboard] = useState(false);

  const goBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  const handleNavigationStateChange = (navState) => {
    const url = navState.url;

    if (url.includes('dashboard')) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  };

  const onPress = () => {
    isDashboard ? navigation.goBack() : goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header onPress={onPress} />
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://staging.mydocsy.com/embedded_dashboard_link?access_token=YOUR_ACCESS_TOKEN',
        }}
        onNavigationStateChange={handleNavigationStateChange}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

// Stack Navigator
const Stack = createStackNavigator();

// MainStacks Component
function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="mainApp" component={MainApp} />
    </Stack.Navigator>
  );
}

// Styles
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

export default App;
