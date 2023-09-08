import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import SettingsButton from './SettingsButton';
import { useNavigation } from '@react-navigation/native';

const ProfilesAndMore = (props:any) => {
  const navigation = useNavigation();

  const images = [
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
      text:'Gayathri',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU',
      text:'Manoj',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6JDnnyEO4kbiGGzRAzRyxRDgoaDJ_UWwdz3LLKsLMXHa4duef7HSgrYqJONVpDSOYFg&usqp=CAU',
      text:'Rio',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVNxpxSBe-RA0h6yaML3_VrTWa_FYaEKxQ2RjWYjske1QPixHcISzO69xN0ayXiApeCk&usqp=CAU',
      text:'SaiRam',
    },
    {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
      text: 'Denny',
    },
  
  ];

  return (
    <View style={styles.container}>
        <View style={styles.topContain}>
          <View  style={styles.navbarStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={20} color="#fff"/> 
            </TouchableOpacity>
            <Text style={styles.mainContainText}> Profiles & More </Text>
          </View>
        </View>
        <View style={styles.bottomContain}>
            <ScrollView style={styles.scroll}>
              <View style={styles.imageContainer}>
                {images.map((image, index) => (
                      <View key={index}>
                      <Image source={{ uri: image.uri }} style={styles.avatarImage} />
                       <Text style={styles.imageText}> {image.text} </Text> 
                      </View>
                ))}
              </View>
              <View>
                  <SettingsButton name="notifications" text='Notifications' />
                  <SettingsButton name="list" text='My List' />
                  <SettingsButton name="settings-outline" text='App Settings' />
                  <SettingsButton name="person-outline" text='Account' />
                  <SettingsButton name="md-help-circle-outline" text='Help' />
             </View>
             <TouchableOpacity>
             <Text style={styles.signOutText} > Sign Out </Text>
             </TouchableOpacity>
            </ScrollView>
        </View>
  
    </View>
  )
};

export default ProfilesAndMore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  topContain:{
      height:50,
      zIndex:1,
      flexDirection:'row',
  },
  mainContainText:{
      paddingLeft:20,
      color:'#fff',
      fontWeight:'500',
      fontSize:20,
  },
  navbarStyle:{
    flexDirection:'row',
    marginTop:10,
    marginLeft:10
  },
  bottomContain:{
    flex:1
  },
  scroll:{
    flex:1
  },
  avatarImage:{
    marginTop:5,
    marginLeft:23,
    width:50,
    height:50,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  imageContainer:{
    flexDirection:'row',
  },
  imageText: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginLeft:15
  },
  scrollSecondButton:{
    marginTop:30,
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
    marginLeft:195,
  },
  textSecondButtonOne:{
    marginTop:11,
    marginLeft:7,
    
  },
  signOutText:{
    color:'#fff',
    marginTop:40,
    marginLeft:150,
    fontSize:14,
    fontWeight:'400'
  }

});
