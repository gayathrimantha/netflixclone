import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MainHeaderHome = (props:any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContain }>
        
      <View>
      <Image
        style={styles.mainContainText}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
        }}
      />
      </View>
      <View style={styles.topBarStyle}>
         <Icon name="search" size={20} color="#fff"/> 
          
      
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('ProfilesAndMore')}>
      <Image
        style={styles.avatarImage}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        }}
      />
      </TouchableOpacity>

      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
mainContain:{
    backgroundColor:'rgba(24, 24, 24, 0.75)',
    height:50,
    width:'100%',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    zIndex:1,
    flexDirection:'row'

},
mainContainText:{
    paddingTop:14,
    paddingLeft:20,
    width:45,
    height:40,
    marginTop:5
     
},
topBarStyle:{
  position: 'absolute', 
  right: 20,
  top:15,
  flexDirection:'row'
},
avatarImage:{
  marginLeft:30,
  width:25,
  height:25,
  borderTopLeftRadius: 3,
  borderTopRightRadius: 3,
  borderBottomLeftRadius: 3,
  borderBottomRightRadius: 3,
 
}
})

export default MainHeaderHome