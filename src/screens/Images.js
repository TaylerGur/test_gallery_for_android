import React from 'react';
import CurrentImage from '../components/currentImage.js';
import { StyleSheet, View, Image, Text } from 'react-native';

class Images extends React.Component {
	// constructor(props) {
	//   super(props);
	
	//   this.state = {
	//   	title: ':)'
	//   }
	// }
  static navigationOptions = {
    title: 'image'
  };
  render() {
    return (
      <CurrentImage url={this.props.navigation.state.params} />
     
    );
  }
}

export default Images;