import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class CurrentImage extends Component {

  render() {
   return (
        <View>
            <Image style={styles.img} source={this.props.url}  />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  img:{
    width: '100%',
    height: '100%',
  }
});
export default CurrentImage;