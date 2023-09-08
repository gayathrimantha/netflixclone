import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import MainHeaderNewHot from '../../MainHeasderNewHot';
import NewHotScrollTwo from '../../ComponentScreens/NewHotScrollTwo';

const NewandHotStack = () => {
  return (
    <View style={styles.scrollview}>
      <MainHeaderNewHot title='New & Hot' name="notifications-outline"/>
      <ScrollView style={styles.scroll}>
      <View>
            <Text  style={styles.bottomTabText}>🍿 Coming Soon</Text>
      </View>
      <NewHotScrollTwo/>
      <View>
            <Text  style={styles.bottomTabTextTwo}>🔥 Everyone is watching</Text>
      </View>
      <NewHotScrollTwo/>
      <View>
            <Text  style={styles.bottomTabTextTwo}>🎮 Games</Text>
      </View>
      <NewHotScrollTwo/>
      <View>
            <Text  style={styles.bottomTabTextTwo}>🏅Top 10 TV Shows</Text>
      </View>
      <NewHotScrollTwo/>
      <View>
            <Text  style={styles.bottomTabTextTwo}>🏅Top 10 Movies</Text>
      </View>
      <NewHotScrollTwo/>
      </ScrollView>
    </View>
    
  )
}

export default NewandHotStack

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
    color:'white',
    fontWeight:'900',
    marginLeft:20,
    marginTop:80,
},
bottomTabTextTwo:{
     color:'white',
    fontWeight:'900',
    marginLeft:20,
}


})