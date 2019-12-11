import React from 'react';
import artImg from '../assets/images/artFront.jpg';
import exitImg from '../assets/images/beNow.jpg';
import earthImg from '../assets/images/earthF.jpg';
import freeImg from '../assets/images/freeFront.jpg';
import respImg from '../assets/images/respectFront.jpg';
import wallImg from '../assets/images/wall.jpg';
import surpriseImg from '../assets/images/surpriseFront.jpg';

export default React.createContext({

    products: [
        { 
          source: artImg,
          price: 9.99,
          id: 'art234',
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
      addProductToCart: (product) => {},
      removeProductFromCart: (productId) => {}


});



