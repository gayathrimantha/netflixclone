import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


const SettingsButton = (props:any) => {
  return (
    <View>
            <TouchableOpacity
            style={styles.scrollSecondButton}
             >
            <Icon {...props}size={20} color="#fff" style={styles.textSecondButtonOne}  /> 
             <Text style={styles.textSecondButton}> {props.text} </Text>
             <Icon name="chevron-forward" size={20} color="#7A7A7A" style={styles.textSecondButtonTwo}  /> 
            </TouchableOpacity>
    </View>
  )
}

export default SettingsButton

const styles = StyleSheet.create({
    scrollSecondButton:{
        marginTop:20,
        marginRight:10,
        marginLeft:20,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: '#2A2A29',
        height:45,
        width:350,
        flexDirection:'row',
      },
      textSecondButton:{
        color:'#fff',
        fontSize:14,
        fontWeight:'700',
        marginTop:12,
        marginLeft:15
      },
      textSecondButtonTwo:{
        marginTop:12,
        marginLeft:300,
        position:'absolute',
      },
      textSecondButtonOne:{
        marginTop:11,
        marginLeft:7,
        
      }

})