import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';


const SplashScreen = () => {
    const gifUrl = 'https://media.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif';
  return (
    <View style={styles.container}>
     <FastImage
        style={styles.gif}
        source={{
          uri: gifUrl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black'
      },
      gif: {
        width: '100%',
        height: 200,
      },
});

export default SplashScreen;