import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList , TouchableOpacity, SafeAreaView} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

const videos = [
    {
      id: '1',
      title: 'MANIFEST',
      url: 'https://vod-progressive.akamaized.net/exp=1683665004~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4363%2F14%2F371817283%2F1544168342.mp4~hmac=e009a81ae4280577a514eb037ac56bef737639310b6667d53e827a8bdbd5d024/vimeo-prod-skyfire-std-us/01/4363/14/371817283/1544168342.mp4',
    },
    {
      id: '2',
      title: 'CITADEL',
      url: 'https://vod-progressive.akamaized.net/exp=1683665004~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4363%2F14%2F371817283%2F1544168342.mp4~hmac=e009a81ae4280577a514eb037ac56bef737639310b6667d53e827a8bdbd5d024/vimeo-prod-skyfire-std-us/01/4363/14/371817283/1544168342.mp4',
    },
    {
      id: '3',
      title: 'SUITS',
      url: 'https://vod-progressive.akamaized.net/exp=1683665004~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4363%2F14%2F371817283%2F1544168342.mp4~hmac=e009a81ae4280577a514eb037ac56bef737639310b6667d53e827a8bdbd5d024/vimeo-prod-skyfire-std-us/01/4363/14/371817283/1544168342.mp4',
    },
  ];

const VideoItem = ({ item }:any) => {
    const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <View>
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: item.url }}
        style={styles.video}
        muted={muted}
        resizeMode="contain"
      
      />
     
      <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
        <Text style={styles.muteButtonText}>{muted ? 'Unmute' : 'Mute'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.textStyleContainer} >
        <Text style={styles.textStyle}>{item.title}</Text>
        <View style={styles.iconStyleContainer}>
        <Icon name='notifications-outline'size={20} color="#fff"/> 
        <Icon name="information-circle-outline" size={20} color="#fff"/>
        </View>
      
    </View>

    </View>
  );
};

const NewHotScrollTwo = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <VideoItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  video: {
    width: 350,
    height: 200
  },
  muteButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 3,
  },
  muteButtonText: {
    color: '#fff',
  },
  textStyle:{
    color:'white',
    marginRight:180,
    fontSize:25,
    fontWeight:'700',
  },
  textStyleContainer:{
    flexDirection:'row',
    paddingLeft:10
    
  },
  iconStyleContainer:{
    flexDirection:'row',
    marginRight:20
  }

});

export default NewHotScrollTwo;
