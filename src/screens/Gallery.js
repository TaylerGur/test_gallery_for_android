import React from 'react';
import { StyleSheet, Text, ScrollView, Button, View } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import * as data from '../redux/actions/dataActions.js';
import * as page from '../redux/actions/pageActions.js';
import ElementGallery from '../components/ElementGallery.js';
import MoreBtn from '../components/MoreBtn.js';


class Gallery extends React.Component {
  componentDidMount(){
    if(this.props.page == 1){
        axios.get('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=1')
      .then((response) => {
      
          this.props.dispatch(page.edit(2));
          this.props.dispatch(data.create(response.data.photos));
      })
      .catch((error) =>{
        console.log('errr');
      });
    }
  }
  fullScreen(url){
    this.props.navigation.navigate('Images', { uri: url });
  }

  render() {
    if(this.props.data){
        this.list =  this.props.data.map((e, i) => {
           return ( <ElementGallery data={e} press={() => this.fullScreen(e.image_url)} idImage={i} key={i}/> );
        });
    }
    return (
      <ScrollView>
        <View style={style.content}>
            {this.list}
        </View>
        <MoreBtn />
        <Button  onPress={() => this.props.navigation.navigate('Image', { user: 'Lucy' })} title="Chat with Lucy" />
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
    content:{
      flexWrap: 'wrap',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row'
    }
});
function mapStateToProps(state){
  return {
    data : state.dataGallery,
    page : state.page
  }
};

export default connect(mapStateToProps)(Gallery);