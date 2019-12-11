/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen'
import ProductsScreen from './src/screens/ProductsScreen'
import artImg from './src/assets/images/artFront.jpg';
import exitImg from './src/assets/images/beNow.jpg';
import earthImg from './src/assets/images/earthF.jpg';
import freeImg from './src/assets/images/freeFront.jpg';
import respImg from './src/assets/images/respectFront.jpg';
import wallImg from './src/assets/images/wall.jpg';
import surpriseImg from './src/assets/images/surpriseFront.jpg';



//import { createStore, applyMiddleware } from 'redux';
//import {Provider } from 'react-redux';
//import reduxThunk from 'redux-thunk';
import ShopCartScreen from './src/screens/ShopCartScreen';
import ShopContext from './src/context/shop-context'


const {width} = Dimensions.get('window');
const height = width * 1.5;


class App extends React.Component {
  state = {
    products: [
      { 
        source: artImg,
        id: 'art234',
        price: 9.99,
        title: "Arte tshirt",
        description: "Decipher the Words going Around the tshirt"
      },
      { 
        source: exitImg,
        id: 'exist876',
        price: 9.99,
        title: "Beser tshirt",
        description: "Pure existance is what we all things are"
      },
      { 
        source: earthImg,
        id: 'earth986',
        price: 12.99,
        title: "Earth tshirt",
        description: "Only one planet -> Only one home"
      },
      { 
        source: freeImg,
        id: 'free923',
        price: 12.99,
        title: "Freedom tshirt",
        description: "Being free in the confines of this body."
      },
      { 
        source: respImg,
        id: 'resp543',
        price: 8.99,
        title: "Respeto tshirt",
        description: "What else can bring peace but Respect"
      },
      { 
        source: wallImg,
        id: 'wall863',
        price: 8.99,
        title: "Wall tshirt",
        description: "Are we ALL divided by a Wall "
      },
      { 
          source: surpriseImg,
          id: 'surp133',
          price: 8.99,
          title: "Surprise tshirt",
          description: "There is a surprise "
        }
    ],

    cart: [],

  };

  addProductToCart = product => {
    // let itemsNum = cart.reduce((count, curItem)=> {
    //   return count + curItem.quantity;
    //   }, 0);
    console.log('Adding product', product);
    
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0 ) {
      updatedCart.push( {...product, quantity: 1 })
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    //this.state.cart.push(product);

    console.log('cart: ', this.state.cart)

    this.setState({cart: updatedCart});
  };

  removeProductFromCart = productId => {
    console.log('Removing product: ', productId);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );
    const updatedItem = {
      ...updatedCart[update]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({cart: updatedCart});
  };

  render() {
    return (  
      <ShopContext.Provider value={{
        products: this.state.products,
        cart: this.state.cart,
        addProductToCart: this.addProductToCart,
        removeProductFromCart: this.removeProductFromCart
      }}>
      <AppContainer />
      </ShopContext.Provider> );
  }
  
};



export default App;






class DashboardScreen extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>

        <Text>Dashboard</Text>
        <Button title='Log Out' onPress={()=> this.props.navigation.navigate('Products')} />
      </View>
    )
  }
}



import artSlide from './src/assets/images/artSlide.jpg';
import exitSlide from './src/assets/images/existSlide.jpg';
import earthSlide from './src/assets/images/earthSlide.jpg';
import freeSlide from './src/assets/images/freeSlide.jpg';
import respSlide from './src/assets/images/respectSlide.jpg';
import wallSlide from './src/assets/images/wallSlide.jpg';

class Exist extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Exist</Text>
        <Image style={styles.Image} source= {exitSlide} />
        <View style={styles.divider}>
        <Text style={styles.bodyText}> Exist, be more than a word or a definition. </Text>
        </View>
      </View>
    )
  }
}
class Wall extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Wall</Text>
        <Image style={styles.Image} source= {wallSlide} />
        <View style={styles.divider}>
        <Text style={styles.bodyText}> Are we ALL divided by a Wall </Text>
        </View>
      </View>
    )
  }
}
class Free extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Freedom</Text>
        <Image style={styles.Image} source= {freeSlide} />
        <View style={styles.divider}>
        <Text style={styles.bodyText}> Being free in the confines of this body. </Text>
        </View>
      </View>
    )
  }
}
class Art extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Art</Text>
        <Image style={styles.Image} source= {artSlide} />
        <View style={styles.divider}>
        <Text style={styles.bodyText}> Decipher the Words going Around the tshirt </Text>
        </View>
      </View>
    )
  }
}
class Earth extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Earth</Text>
        <Image style={styles.Image} source= {earthSlide} />
        <View style={styles.divider}>
        <Text style={styles.bodyText}> Only one planet -> Only one home. </Text>
        </View>
      </View>
    )
  }
}
class Respeto extends React.Component {
  render() {
    return (
      <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Respeto</Text>
        <Image style={styles.Image} source= {respSlide} />
        <View style={styles.divider}>
        <Text style={styles.bodyText}> What else can bring peace but Respect </Text>
        </View>
      </View>
    )
  }
}
const DashboardTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Products: ProductsScreen,
  ShopCart: ShopCartScreen,
})

const AppDrawerNavigator = createDrawerNavigator({
  Beser: {
    //screen: DashboardScreen
    screen: DashboardTabNavigator
  },
  Home: {
    screen: HomeScreen
  },
  Art: {
    screen: Art
  },
  Free: {
    screen: Free
  },
  Exist: {
    screen: Exist
  },
  Wall: {
    screen: Wall
  },
  Earth: {
    screen: Earth
  },
  Respeto: {
    screen: Respeto
  },
})
const AppSwitchNavigator = createSwitchNavigator({
  Home: {screen:HomeScreen},
  Dashboard: {screen: AppDrawerNavigator}
})

//wrapp app into naviagation

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  image: {
    width,
    height,
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom:10,
    paddingHorizontal: 24,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    backgroundColor: 'black'
  },
  divider: {
    backgroundColor: 'black',
    width: '100%'
},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginBottom:10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});