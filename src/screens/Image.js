import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import currentImage from '../components/currentImage.js';


class Images extends React.Component {
  render() {
    console.log(this.props.navigation.state);
    return (
      <View>
         <Image  source={this.props.navigation.state.params} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default  Images;