import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import artImg from '../assets/images/artSlide.jpg';
import exitImg from '../assets/images/existSlide.jpg';
import earthImg from '../assets/images/earthSlide.jpg';
import freeImg from '../assets/images/freeSlide.jpg';
import respImg from '../assets/images/respectSlide.jpg';
import wallImg from '../assets/images/wallSlide.jpg';

const {width} = Dimensions.get('window');
const height = width * 2;



class CarouselComponent extends React.Component {
    
    render() {
        const images = [
            { 
              source: artImg
            },
            { 
              source: exitImg
            },
            { 
              source: earthImg
            },
            { 
              source: freeImg
            },
            { 
              source: respImg
            },
            { 
              source: wallImg
            }
          ]
        //const { images } = this.props;
        if (images && images.length) {
          return (
            <View style={styles.scrollContainer}>
              <ScrollView 
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={true} >
                  {images.map((image, i) => (
                    <Image style={styles.image} source={image.source} key={i}/>
                  ))}
              </ScrollView>
            </View>
          );
        }
      }
    
  }
  export default CarouselComponent;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollContainer: {
      height,
    },
    image: {
      width,
      height,
    }
});