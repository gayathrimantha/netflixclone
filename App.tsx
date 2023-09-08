/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/TabScreens/Home';
import Games from './Screens/TabScreens/Games';
import Downloads from './Screens/TabScreens/Downloads';
import NewandHot from './Screens/TabScreens/NewandHot';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from './Screens/ComponentScreens/SplashScreen';



const Tab = createBottomTabNavigator();


const App = () => {
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen />
      </View>
    );
  }


  return (
<NavigationContainer>
      <Tab.Navigator 
      screenOptions ={({ route }) => ({
        tabBarInactiveTintColor: '#A3A3A3',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
          backgroundColor:'#000'
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Games') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          }
          else if (route.name === 'New & Hot') {
            iconName = focused ? 'md-play-forward-circle' : 'md-play-forward-circle-outline';
          }
          else if (route.name === 'Fast Laughs') {
            iconName = focused ? 'happy' : 'happy-outline';
          }
          else if (route.name === 'Downloads') {
            iconName = focused ? 'download' : 'download-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Games" component={Games} />
        <Tab.Screen name="New & Hot" component={NewandHot} />
        <Tab.Screen name="Downloads" component={Downloads} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
Tab:{
  backgroundColor: '#464646'
  
  
}
});

export default App;
