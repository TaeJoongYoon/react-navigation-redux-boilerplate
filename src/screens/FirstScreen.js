import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Button
} from 'react-native';
import { 
  TAB
} from '../reducers/nav/actionTypes'

class FirstScreen extends Component{
  constructor(props){
    super(props)
  }

  // LifeCycle
  render(){
    const { navigation, goToTab } = this.props;
    return(
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={goToTab}
          title="Click!"
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    goToTab: () => dispatch({ type: TAB}),
  })
)(FirstScreen);