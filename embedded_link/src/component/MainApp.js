import {SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from './Header';
import WebView from 'react-native-webview';

const MainApp = ({navigation}) => {
  const webViewRef = useRef(null);
  const [isDashboard, setIsDashboard] = useState(false);

  const goBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  const handleNavigationStateChange = navState => {
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
    <SafeAreaView style={{flex: 1}}>
      <Header onPress={onPress} />
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://staging.mydocsy.com/embedded_dashboard_link?access_token=Your Access Token',
        }}
        onNavigationStateChange={handleNavigationStateChange}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default MainApp;
