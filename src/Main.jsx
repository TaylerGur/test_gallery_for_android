import React from 'react';
import { StackNavigator } from 'react-navigation';
import Image from './screens/Image.js';
import Gallery from './screens/Gallery.js';

const Main = StackNavigator({
  Home: {
    screen: Gallery,
  },
  Image: {
    path: 'image/:id',
    screen: Image,
  }
});

export default Main;
