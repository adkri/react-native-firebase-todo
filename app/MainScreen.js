import React, { Component } from 'react'
import { Button } from 'react-native'

export default class MainScreen extends Component{

  constructor(props){
    super(props)

  }
  
  render(){
    return(
      <View>
        <Button
          title="Todo App"
          onPress={() => this.props.navigator.push({ ident: "TodoScreen"})}
        />
      </View>
    )
  }
}
