import React, { Component } from 'react';
import { StyleSheet, Button, View} from 'react-native';
import { connect } from 'react-redux';
import * as data from '../redux/actions/dataActions';
import * as page from '../redux/actions/pageActions';
import * as isLoad from '../redux/actions/loadActions';
import axios from 'axios';

class MoreBtn extends Component {
    addMoreImage(){
      this.props.dispatch(isLoad.edit(true));
       axios.get(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${this.props.page}`)
      .then((response) => {
          console.log('response ', response);
          // this.setState({
          //   data : response
          // });
          this.props.dispatch(data.add(response.data.photos));
          this.props.dispatch(page.edit(this.props.page + 1));
          // console.log(this.props.data);
          // console.log(this.props.page);
          this.props.dispatch(isLoad.edit(false));

      })
      .catch((error) =>{
        console.log('errr');
      });
    }
    render() {
      // console.log(this.props);
  	return (
      <View style={this.props.isLoad ? {display:'none'} : style.btn }>
    	   <Button title="more images..." color='black' onPress={() => this.addMoreImage()} />
      </View>
    );
  }
}
const style = StyleSheet.create({
    btn:{
      marginTop: 20,
      padding: 10,
      // backgroundColor: 'black'
    }
});

function mapStateToProps(state){
  return {
    page : state.page,
    data : state.dataGallery,
    isLoad: state.isLoad
  }
}


export default connect(mapStateToProps)(MoreBtn);