import { StyleSheet, Text, View , ScrollView, ImageBackground} from 'react-native'
import React, {useRef} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import MainHeaderHome from '../../MainHeaderHome';
import HomeScrollOne from '../../ComponentScreens/HomeScrollOne';
import HomeScrollTwo from '../../ComponentScreens/HomeScrollTwo';
import ActionSheet from "react-native-actions-sheet";


const HomeStack = () => {
    
    
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const showSheet = () =>{
    actionSheetRef.current?.show();
}
  return (
    <View style={styles.scrollview}>
        
    <MainHeaderHome />
    <ScrollView style={styles.scroll} >

    <View>
        <ImageBackground style={styles.movieImage}
        
        source={{
          uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054',
        }}>
    <View style={styles.secondaryHeader}>
             <Text style={styles.menuItems}>TV Shows</Text>
            <Text style={styles.menuItems}>Movies</Text>
            <Text style={styles.menuItems} >Categories <Icon name="caret-down" size={15} color="#fff"/></Text>
            

    </View>
    <View style={styles.buttonStyles}>
    <View style={styles.buttonStylesOne}>
        <View style={styles.bottomButtons}>
            <View>
                <Icon name="add" size={25} color="#fff"/>
            </View>
            <View>
                <Text style={styles.textStyle}>My List</Text>
            </View>
        </View>
        <View style={styles.bottomButtons} >
                <View style={styles.playButton}>
                        <View style={styles.playButtonOne}>
                        <Icon name="play" size={20} color="#000"/>
                        </View>
                        <View style={styles.playButtonTwo}>
                            <Text onPress={showSheet} style={styles.playButtonThree}>Play</Text>
                        </View>
                </View>
        </View>
        <View style={styles.bottomButtons}>
            <View>
                <Icon name="information-circle-outline" size={25} color="#fff"/>
            </View>
            <View>
                <Text style={styles.textStyle}>Info</Text>
            </View>

        </View>
    </View>
    </View>
            
        </ImageBackground>

    </View>

    
    <View>
            <Text  style={styles.bottomTabText}>Movies & TV Shows Dubbed in Telugu</Text>
    </View>

    <HomeScrollOne/>
  
    <View>
            <Text  style={styles.bottomTabText}>New Releases</Text>
    </View>
    <HomeScrollTwo/>
    <View>
            <Text  style={styles.bottomTabText}>Trending Now</Text>
    </View>
    <HomeScrollOne/>
    <View>
            <Text  style={styles.bottomTabText}>Only On Netflix</Text>
    </View>
    <HomeScrollTwo/>
    </ScrollView>
    <ActionSheet ref={actionSheetRef} zIndex={999999} gestureEnabled={true}>
        <View style={{width:'100%',height:200,backgroundColor:'#fff'}}><Text>Hi, I am here.</Text></View>
      
    </ActionSheet>
    </View>
   

  )
}

export default HomeStack

const styles = StyleSheet.create({
    scrollview:{
        flex:1,
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
        bottom:50,
        position:'absolute',
        left:0,
        right:0

    },
    buttonStylesOne:{
        width:'100%',
        justifyContent:'center',
        flexDirection:'row'
        
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
    playButtonTwo:{
        color:'#000',
        marginTop:3,
        marginLeft:3,
        fontSize:13,
        fontWeight:'600',
    },
    playButtonOne:{
        color:'#000',
        marginTop:4,
        marginLeft:5,
        
    },
    playButtonThree:{
        color:'#000',
        marginTop:3,
        marginLeft:3,
        fontSize:13,
        fontWeight:'600',
    },
    bottomTabText:{
        color:'#fff',
        fontWeight:'900',
        marginLeft:15,
    },

        

    
});