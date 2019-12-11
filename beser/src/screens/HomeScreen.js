import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import IntroVideo from '../assets/videos/beser.mp4'
import Video from 'react-native-video';
import logo from '../assets/images/Beser_logo.png';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style= {styles.container}>
            <TouchableOpacity
                  
                  onPress={()=> this.props.navigation.navigate('Home')}
              >
                  <Image style ={ {marginTop: 40, width: 80, height: 40 }}source = {logo} />
              </TouchableOpacity>
            
            <Video
                  source={IntroVideo}
                  rate={1.0}
                  volume={0.1}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  repeat={true}
                  style={{ width: '100%', height: 500, marginTop: 10 }}
              />
              <View style={styles.divider}>
          <Text style = {styles.bodyText}> BESER is a project that supports and enhance
              the personal identity of the individual that consciously
              choses to decorate the body through symbolic clothing.</Text>
              </View>
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=> this.props.navigation.navigate('Products')}
              >
                  <Text> Enter </Text>
              </TouchableOpacity>
              
        </View>

      )
    } 
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    divider: {
        backgroundColor: 'black',
        width: '100%'
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    bodyText: {
      fontSize: 16,
      lineHeight: 19,
      textAlign: 'center',
      padding: 20,
      color: '#fff',
      backgroundColor: 'black',
      marginTop:20
    },
    enterButton: {
        fontSize: 26,
      lineHeight: 19,
      textAlign: 'center',
      padding: 10,
      color: '#fff',
      backgroundColor: 'black'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 20
      },
});