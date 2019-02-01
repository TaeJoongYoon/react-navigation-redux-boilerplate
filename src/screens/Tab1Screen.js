import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Button
} from 'react-native';
import { 
  DETAIL
} from '../reducers/nav/actionTypes'

class Tab1Screen extends Component{
  constructor(props){
    super(props)
  }

  // LifeCycle
  render(){
    const { navigation, goToDetail } = this.props;
    return(
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={goToDetail}
          title="Detail"
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    goToDetail: () => dispatch({ type: DETAIL}),
  })
)(Tab1Screen);