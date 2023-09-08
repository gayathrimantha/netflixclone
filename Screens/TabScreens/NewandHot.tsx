import { StyleSheet, View } from 'react-native'
import React from 'react'
import NewandHotStack from '../StackScreens/NewandHot/NewandHotStack';
import ProfilesAndMore from '../ProfilesAndMore';
import { createStackNavigator } from '@react-navigation/stack';



const NewandHot = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.scrollview}>
    <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen name="NewandHotStack" component={NewandHotStack} />
    <Stack.Screen name="ProfilesAndMore" component={ProfilesAndMore} />
    </Stack.Navigator>
    </View>
    
  )
}

export default NewandHot

const styles = StyleSheet.create({
  scrollview:{
    flex:1,
},
})