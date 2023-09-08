import { StyleSheet, Text, View , ScrollView, Image, ImageBackground, Button, FlatList, SafeAreaView} from 'react-native'
import React, { useState } from 'react';



const data = [
    {
      id: '1',
      text: ' 🍿 Coming Soon',
      
    },
    {
      id: '2',
      text: '🔥 Everyone is watching',
      
    },
    {
        id: '3',
        text: '🎮 Games',
       
      },
      {
        id: '4',
        text: '🏅Top 10 TV Shows',
        
      },
      {
        id: '5',
        text: '🏅Top 10 Movies',
        
      },





  ];

  const renderItem = ({ item }:any) => (
    <View style={styles.item}>
      <Text style={styles.textContent}>{item.text}</Text>
    </View>
  );



const NewHotScroll = () => {
  return (
    <SafeAreaView>

         <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    />
    </SafeAreaView>
  )
}

export default NewHotScroll;

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
      },
      image: {
        width: 50,
        height: 40,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        },
        textContent:{
            color:'#fff',
            fontWeight:'500',
            fontSize:12,
        }

})