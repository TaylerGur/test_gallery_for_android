import React from 'react';
import CurrentImage from '../components/currentImage.js';
import { StyleSheet, View, Image, Text } from 'react-native';

class Images extends React.Component {
  render() {
    return (
      <CurrentImage url={this.props.navigation.state.params} />
     
    );
  }
}

export default Images;