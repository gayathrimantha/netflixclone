import { StyleSheet, Text, View , ScrollView, Image, ImageBackground, Button, FlatList} from 'react-native'
import React from 'react'

const data = [
    {
      id: '1',
      title: 'Image 1',
      imageUrl: 'https://i.pinimg.com/originals/d4/80/e2/d480e25470cfd9ec06e323e6330105ae.jpg',
    },
    {
      id: '2',
      title: 'Image 2',
      imageUrl: 'https://static1.tribute.ca/poster/660x980/riverdale-netflix-131772.jpg',
    },
    {
        id: '3',
        title: 'Image 3',
        imageUrl: 'https://storage.googleapis.com/stateless-campfire-pictures/2020/06/0bafad68-daaebeacc-1591223242lp48c.jpg',
      },
      {
        id: '4',
        title: 'Image 4',
        imageUrl: 'https://dyn1.heritagestatic.com/lf?set=path%5B2%2F3%2F4%2F3%2F6%2F23436345%5D&call=url%5Bfile%3Aproduct.chain%5D',
      },
      {
        id: '5',
        title: 'Image 5',
        imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81JOlNvH6zL._SY550_.jpg',
      },
      {
        id: '6',
        title: 'Image 6',
        imageUrl: 'https://cdn.shopify.com/s/files/1/2491/1072/products/81qw6jrFaJL._SL1500_1200x1200.jpg?v=1573888367',
      },




  ];

  const renderItem = ({ item }:any) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: item.imageUrl }}
      />
      <Text>{item.title}</Text>
    </View>
  );



const HomeScrollTwo = () => {
  return (
    <ScrollView>
         <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={true}
    />
    </ScrollView>
  )
}

export default HomeScrollTwo

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

})