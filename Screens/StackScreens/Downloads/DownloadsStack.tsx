import { StyleSheet, Text, View , ScrollView, Image, ImageBackground, Button, FlatList} from 'react-native'
import React, {useRef} from 'react'
import MainHeader from '../../MainHeader'
import Icon from 'react-native-vector-icons/Ionicons';
import MainHeaderHome from '../../MainHeaderHome';
import HomeScrollOne from '../../ComponentScreens/HomeScrollOne';
import HomeScrollTwo from '../../ComponentScreens/HomeScrollTwo';
import ActionSheet from "react-native-actions-sheet";
import GamesScroll from '../../ComponentScreens/GamesScroll';
import GamesScrollTwo from '../../ComponentScreens/GameScrollTwo';
import {
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from 'react-native';

const DownloadsStack = () => {
  return (
    <View style={styles.scrollview}>
      <MainHeader title='Downloads' name="search"/>
      <ScrollView style={styles.scroll}>
          <View style={styles.scrollFirst}>
          <Icon name="settings-outline" size={18} color="#fff"/>
          <Text style={styles.scrollText}>Smart Downloads</Text>
          </View>
          <View style={styles.scrollSecond}>
              <Text style={styles.scrollSecondText}>Introducing Downloads for You</Text>
              <Text style={styles.scrollSecondTextPara}>We'll download a personalise selection of movies and shows for you, so there's always something to watch on yuor phone.</Text>
          </View>
          <View style={styles.scrollSecondImage}>
          <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQaM1DPQoGLQODo2dJAjIL4CGnUiLlroxRw&usqp=CAU' }}
              style={{ width: 150, height: 200 }}
          />
          </View>
          <View style={styles.scrollSecondButton}>
          <Button
              title="Set Up"
              onPress={() => {
                console.log('Button pressed');
              }}
         />
          </View>
      </ScrollView>
    </View>
  )
}

export default DownloadsStack

const styles = StyleSheet.create({
  scrollview:{
    flex:1,
    marginBottom:40,
},
scroll:{
  backgroundColor:'#000'
},
scrollFirst:{
  marginTop:60,
  marginLeft:20,
  flexDirection:'row',
}, 
scrollText:{
    color:'white',
    marginLeft:10
},
scrollSecond:{
  marginTop:30,
  marginLeft:25
},
scrollSecondText:{
  color:'white',
  fontWeight:'700',

},
scrollSecondTextPara:{
  color:'white',
  marginTop:10,
  fontWeight:'300',
  fontSize:13,
  marginRight:15,
},
scrollSecondImage:{
  marginTop:60,
  alignItems:'center'
},
scrollSecondButton:{
  marginTop:30,
  marginRight:20,
  marginLeft:20,
  borderTopLeftRadius: 3,
  borderTopRightRadius: 3,
  borderBottomLeftRadius: 3,
  borderBottomRightRadius: 3,
}

})