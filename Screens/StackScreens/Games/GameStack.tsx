import { StyleSheet, Text, View , ScrollView, ImageBackground} from 'react-native'
import React from 'react'
import MainHeader from '../../MainHeader'
import GamesScroll from '../../ComponentScreens/GamesScroll';
import GamesScrollTwo from '../../ComponentScreens/GameScrollTwo';


const GameStack = () => {
  return (
    <View style={styles.scrollview}>
      <MainHeader title='Games' name='search'/>
      <ScrollView style={styles.scroll}>
      <View>
        <ImageBackground style={styles.movieImage}
        
        source={{
          uri: 'https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_1080,w_1080/https%3A%2F%2Fnetflixlife.com%2Ffiles%2F2022%2F06%2FSABDgame-square-1080x1080_na_01_en.jpg',
        }}>

    <View style={styles.buttonStyles}>
   
        <View style={styles.buttonStylesOne}>
          <Text style={styles.textStyle}>{'\u2B24'} Thriller </Text>
          <Text style={styles.textStyle}>{'\u2B24'} Fantasy </Text>
          <Text style={styles.textStyle}>{'\u2B24'} Action </Text>
          <Text style={styles.textStyle}>{'\u2B24'} Adventure </Text>
         
        </View>
    </View>
            
        </ImageBackground>

    </View>
    <View>
            <Text  style={styles.bottomTabText}>Recently Released </Text>
    </View>
    <GamesScroll/>
  
  <View>
          <Text  style={styles.bottomTabText}>Mobile Games</Text>
  </View>
  <GamesScroll/>
  <View>
          <Text  style={styles.bottomTabText}>Mobile Games and Trailers</Text>
  </View>
  <GamesScrollTwo/>
    </ScrollView>
    </View>
  )
}

export default GameStack

const styles = StyleSheet.create({
  scrollview:{
    flex:1,
    marginBottom:40,
},
movieImage:{
  width:'100%',
  height:undefined,
  aspectRatio:0.8
},
scroll:{
    backgroundColor:'#000'
},
secondaryHeader:{
    color:'#fff',
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-around',
    width:'80%',
    paddingTop:10,
    marginLeft:30
    
},
menuItems:{
    color:'#fff',
    fontWeight:'600'
},
buttonStyles:{
    bottom:10,
    position:'absolute',
    left:0,
    right:0,
    marginTop:10,

},
buttonStylesOne:{
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    marginTop:50,
    paddingTop:20,
    
    
},
textStyle:{
    color:'#fff',
    fontSize:10,
    textAlign:'center'
},
playButton:{
   backgroundColor:'#fff',
   width:70,
   height:30,
   marginRight:15,
   flexDirection:'row',
    marginTop:2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
   
},
bottomButtons:{
    marginLeft:20,
    marginRight:10
},


bottomTabText:{
    color:'#fff',
    fontWeight:'900',
    marginLeft:15,
    marginTop:10,
},


})
