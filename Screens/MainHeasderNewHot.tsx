import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import NewHotScroll from './ComponentScreens/NewHotScroll';
import { useNavigation } from '@react-navigation/native';


const MainHeaderNewHot = (props:any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContain }>
        
      
      <Text style={styles.mainContainText}>
      {props.title}
      </Text>
      <View style={styles.topBarStyle}>
         <Icon {...props}size={20} color="#fff"/> 
          
      
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
      <View  style={styles.scrollStyle}>
      <NewHotScroll />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
mainContain:{
    backgroundColor:'#000',
    height:80,
    width:'100%',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    zIndex:1,
    flexDirection:'row'

},
mainContainText:{
    paddingTop:9,
    paddingLeft:20,
    width:200,
    height:40,
    marginTop:5,
    color:'#fff',
    fontWeight:'500',
    fontSize:18,
     
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
 
},
scrollStyle:{
    marginTop:38,
    right: 200,

}
})

export default MainHeaderNewHot;