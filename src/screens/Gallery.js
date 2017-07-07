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
          // console.log('response',response);
          // console.log('response');
          this.props.dispatch(page.edit(2));
          this.props.dispatch(data.create(response.data.photos));
      })
      .catch((error) =>{
        console.log('errr');
      });
    }
  }

  render() {
    // console.log('text');
    if(this.props.data){
       // console.log('data ', this.props.data.data.photos);
        this.list =  this.props.data.map((e, i) => {
          // console.log(e.user);
           return ( <ElementGallery data={e} idImage={i} key={i}/> );
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