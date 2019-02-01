import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Text
} from 'react-native';

class DetailScreen extends Component{
  constructor(props){
    super(props)
  }

  // LifeCycle
  render(){
    const { navigation } = this.props;
    return(
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is Tab2</Text>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    
  })
)(DetailScreen);