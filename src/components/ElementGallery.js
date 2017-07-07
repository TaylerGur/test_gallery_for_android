import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, TouchableOpacity } from 'react-native';


class ElementGallery extends Component {
  
    render() {
  	return (
    	<View style={style.element_gallery} >
        <Text style={style.element_gallery_title}>{this.props.data.name}</Text>
          <TouchableOpacity onPress={this.props.press}>
            <Image style={style.element_gallery_image} source = {{uri: this.props.data.image_url}}/>
          </TouchableOpacity>
        <Text style={style.element_gallery_author}>{this.props.data.user.fullname}</Text>

      </View>
    );
  }
}
const style = StyleSheet.create({
  element_gallery :{
    width: 140,
    margin: 10,
    minHeight: 150,
    justifyContent: 'center',
  },
  touch:{
    width: 100,
    height: 100
  },
  element_gallery_title: {
    color:'gray',
    fontSize: 18,
    height: 25,
    textAlign: 'center',
    overflow: 'hidden'
  },
  element_gallery_author : {
    height: 25,
    fontSize: 14,
    textAlign: 'right',
    overflow: 'hidden'
  },
  element_gallery_image :{
    display: 'flex',
    width:'100%',
    height: 100
  }
});

export default ElementGallery;