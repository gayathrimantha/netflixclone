import { StyleSheet} from 'react-native'
import React, {useRef} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from '../StackScreens/Home/HomeStack';
import ProfilesAndMore from '../ProfilesAndMore';


const Home = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="HomeStack" component={HomeStack} />
    <Stack.Screen name="ProfilesAndMore" component={ProfilesAndMore} />
    </Stack.Navigator>

  )
}

export default Home

const styles = StyleSheet.create({
      
});