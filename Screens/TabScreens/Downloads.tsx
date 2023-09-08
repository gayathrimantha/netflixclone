import { StyleSheet, View } from 'react-native'
import React from 'react'
import DownloadsStack from '../StackScreens/Downloads/DownloadsStack';
import ProfilesAndMore from '../ProfilesAndMore';
import { createStackNavigator } from '@react-navigation/stack';

const Downloads = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.scrollview}>
      <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="DownloadsStack" component={DownloadsStack} />
        <Stack.Screen name="ProfilesAndMore" component={ProfilesAndMore} />
        </Stack.Navigator>
    </View>
  )
}

export default Downloads

const styles = StyleSheet.create({
  scrollview:{
    flex:1,
},

})