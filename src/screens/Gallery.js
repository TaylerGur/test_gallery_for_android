import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Gallery extends React.Component {
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
  render() {

    return (
      <View style={styles.container}>
        <Text>Its gallery grid!</Text>

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