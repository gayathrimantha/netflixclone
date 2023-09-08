import { StyleSheet} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import GameStack from '../StackScreens/Games/GameStack';
import ProfilesAndMore from '../ProfilesAndMore';


const Games = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="GameStack" component={GameStack} />
    <Stack.Screen name="ProfilesAndMore" component={ProfilesAndMore} />
    </Stack.Navigator>

  )
}

export default Games

const styles = StyleSheet.create({

});