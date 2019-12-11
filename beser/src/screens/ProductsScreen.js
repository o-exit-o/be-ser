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
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShopContext from '../context/shop-context';




const {width} = Dimensions.get('window');
const height = width * 1.5;



class ProductsScreen extends React.Component {
    
    render() {
        
          return (
          <ShopContext.Consumer>
                {context => (
            <View style={styles.container}>

<View ><Text>Cart Item number: </Text>
<Text>{context.cart.reduce((count, curItem)=> {
return count + curItem.quantity;
}, 0)}</Text>
</View>
            <View style={styles.scrollContainer}>
                
                    <ScrollView 
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={true} >
                      {context.products.map((product, i) => (
                        <View >
                        <Text style={styles.bodyText}>{product.description}</Text>
                        <Image style={styles.image} source={product.source} key={product.id}/>
    
                            <View >
                            <Text style={styles.price}>{product.price}</Text>
                                <TouchableOpacity 
                                style={styles.button}
                                onPress={context.addProductToCart.bind(this,
                                    product)}
                                >
                                <Text> Add to Cart </Text>
                                <Text>{}</Text>
                                </TouchableOpacity>
                                
                            </View>    
                        </View>
                        
                      ))}
                      
                  </ScrollView>
                  
                
            </View>
            </View>
            )}
              </ShopContext.Consumer>
          );
        
      }
    
  }
  export default ProductsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    scrollContainer: {
        
      height: '100%',
      paddingTop: 80
    },
    image: {
      width,
      height,
    },
    bodyText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        padding: 10,
        color: '#fff',
        backgroundColor: 'black'
      },
    buyButton: {
        backgroundColor: 'black',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        padding: 10,
        color: '#fff',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      price: {
        fontSize: 26,
        lineHeight: 19,
        textAlign: 'left',
        padding: 10,
        color: '#fff',
        backgroundColor: 'green',
        borderColor: 'white',
        borderRadius:50,
        width: 80,
        height: 30
      }
});



// render() {
//     const images = [
//         { 
        
//           source: artImg,
//           price: 9.99,
//           id: 'art234',
//           description: "Decipher the Words going Around the tshirt"
//         },
//         { 
//           source: exitImg,
//           id: 'exist876',
//           price: 9.99,
//           description: "Pure existance is what we all things are"
//         },
//         { 
//           source: earthImg,
//           id: 'earth986',
//           price: 12.99,
//           description: "Only one planet -> Only one home"
//         },
//         { 
//           source: freeImg,
//           id: 'free923',
//           price: 12.99,
//           description: "Being free in the confines of this body."
//         },
//         { 
//           source: respImg,
//           id: 'resp543',
//           price: 8.99,
//           description: "What else can bring peace but Respect"
//         },
//         { 
//           source: wallImg,
//           id: 'wall863',
//           price: 8.99,
//           description: "Are we ALL divided by a Wall "
//         },
//         { 
//             source: surpriseImg,
//             id: 'surp133',
//             price: 8.99,
//             description: "There is a surprise "
//           }
//       ]
//     //const { images } = this.props;
//     if (images && images.length) {
//       return (
//         <View style={styles.container}>
        
//         <View style={styles.scrollContainer}>
//           <ScrollView 
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={true} >
//               {images.map((image, i) => (
//                 <View >
//                 <Text style={styles.bodyText}>{image.description}</Text>
//                 <Image style={styles.image} source={image.source} key={image.id}/>

//                     <View >
//                     <Text style={styles.price}>{image.price}</Text>
//                         <TouchableOpacity 
//                         style={styles.button}
//                         onPress={this.onPress}
//                         >
//                         <Text> Add to Cart </Text>
//                         </TouchableOpacity>
                        
//                     </View>    
//                 </View>
                
//               ))}
//           </ScrollView>
//         </View>
//         </View>
//       );
//     }
//   }