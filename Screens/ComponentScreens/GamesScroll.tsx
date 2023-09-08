import { StyleSheet, Text, View , ScrollView, Image, ImageBackground, Button, FlatList, SafeAreaView} from 'react-native'
import React from 'react'

const data = [
    {
      id: '1',
      text: 'Image 1',
      imageUrl: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e',
    },
    {
      id: '2',
      text: 'Image 2',
      imageUrl: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZFxAQb34bSaSqI3Jb7BiYqp70demsTjeaJE0pMi_MJ6PpjRLOFtTDbIZX9Jg2rGG-GHhsQbqnsIvNliI2f-9A5lI1EtQTo9lz6_mrlawP_9S0im23nEGRK42bObCi4CjrsWk1j2JlDmeva2FcYz_an9.jpg?r=7e3',
    },
    {
        id: '3',
        text: 'Image 3',
        imageUrl: 'https://static2.showtimes.com/poster/660x980/the-prom-netflix-149579.jpg',
      },
      {
        id: '4',
        text: 'Image 4',
        imageUrl: 'https://static2.showtimes.com/poster/660x980/shadow-and-bone-netflix-168155.jpg',
      },
      {
        id: '5',
        text: 'Image 5',
        imageUrl: 'https://i0.wp.com/screen-connections.com/wp-content/uploads/2021/10/Red.Notice-Official.One_.Sheet_.Poster-01.jpg?resize=691%2C1024&ssl=1',
      },
      {
        id: '6',
        text: 'Image 6',
        imageUrl: 'https://static1.tribute.ca/poster/660x980/13-reasons-why-netflix-127067.jpg',
      },




  ];

  const renderItem = ({ item }:any) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: item.imageUrl }}
      />
      <Text style={styles.textContent}>{item.text}</Text>
    </View>
  );



const GamesScroll = () => {
  return (
    <View>
         <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    />
    </View>
  )
}

export default GamesScroll;

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
      },
      image: {
        width: 100,
        height: 150,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        },
        textContent:{
            color:'#fff',
            fontWeight:'500',
        }

})