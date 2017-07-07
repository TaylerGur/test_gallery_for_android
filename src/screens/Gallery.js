import React from 'react';
import { StyleSheet, Text, ScrollView, Button, View, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import * as data from '../redux/actions/dataActions.js';
import * as page from '../redux/actions/pageActions.js';
import * as isLoad from '../redux/actions/loadActions.js';
import ElementGallery from '../components/ElementGallery.js';
import MoreBtn from '../components/MoreBtn.js';


class Gallery extends React.Component {
  componentDidMount(){
    this.props.dispatch(isLoad.edit(true));
    if(this.props.page == 1){
        axios.get('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=1')
      .then((response) => {
      
          this.props.dispatch(page.edit(2));
          this.props.dispatch(data.create(response.data.photos));
          // this.closeActivityIndicator();
          // this.setState({ animating: false })
          this.props.dispatch(isLoad.edit(false));

      })
      .catch((error) =>{
        console.log('errr');
      });
    }
  }
  // loading(){
  //   this.setState({ animating: true });
  // }
  // loaded(){
  //   this.setState({ animating: false });
  // }
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
        <View style = {this.props.isLoad ? style.container : {display:'none'}}>
          <ActivityIndicator
               animating = {this.props.isLoad}
               color = '#bc2b78'
               size = 'large'
               style = {style.activityIndicator}
          />
        </View>
        <MoreBtn />
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
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: 20
   },
  
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginBottom:5,
      marginTop:5
   }
});
function mapStateToProps(state){
  return {
    data : state.dataGallery,
    page : state.page,
    isLoad : state.isLoad
  }
};

export default connect(mapStateToProps)(Gallery);