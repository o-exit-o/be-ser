import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import ShopContext from '../context/shop-context';

class ShopCartScreen extends React.Component {
  static contextType = ShopContext;

    render() {
      return (
        <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
  <View style={styles.header}>
          <Text style={styles.title}>Shop Cart</Text>
      <Text style={styles.title}> {this.context.cart.reduce((count, curItem)=> {
return count + curItem.quantity;
}, 0)}</Text>
</View>
<View style={styles.scrollContainer}>
  <ScrollView 
                    vertical
                    pagingEnabled
                    showsHorizontalScrollIndicator={true} >
  {this.context.cart.map((item, i) => (
                        <View >
                        <Text style={styles.bodyText}>{item.title}</Text>
                        <Image style={styles.image} source={item.source} key={item.id}/>
    
                            <View >
                            <Text style={styles.price}>{item.price}</Text>
                                <TouchableOpacity 
                                style={styles.button}
                                onPress={this.context.removeProductFromCart.bind(this,
                                    item.id)}
                                >
                                <Text> Remove From Cart </Text>
                                <Text>{}</Text>
                                </TouchableOpacity>
                                
                            </View> 
                              
                        </View>
                        
                      ))}
                      </ScrollView> 
                      </View>
        </View>
      )
    }
  }

  export default ShopCartScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',  
    },
    header: {
      marginTop: 40
    },
    scrollContainer: {
        
      height: '80%',
      marginTop:20,
      width:'80%',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    image: {
      width: 220,
      height: 220,
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
        padding: 10,
        marginBottom:20
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