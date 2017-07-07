import React from 'react';
import { StackNavigator } from 'react-navigation';
import Images from './screens/Images.js';
import Gallery from './screens/Gallery.js';

const Main = StackNavigator({
  Home: {
    screen: Gallery,
  },
  Images: {
    path: 'image/:id',
    screen: Images,
  }
});
Gallery.navigationOptions = {
  title: 'Gallery',
};

export default Main;
