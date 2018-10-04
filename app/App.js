import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Todo from './Todo'
import MainScreen from './MainScreen'
import LoginScreen from './LoginScreen'

export default class App extends Component{

  _renderScene(route, navigator){
    var globalNavigatorProps = { navigator }

    switch(route.indent){
      case "MainScreen":
        return (
          <MainScreen {...globalNavigatorProps} />
        )
      case "LoginScreen":
        return(
          <LoginScreen {...globalNavigatorProps} />
        )
      case "TodoScreen":
        return(
          <Todo {...globalNavigatorProps} />
        )
      default:
        return(
          <LoginScreen {...globalNavigatorProps} />
        )
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{indent: "MainScreen"}}
        ref="appNavigator"
        renderScene={this._renderScene} />
    )
  }

}


// <TextInput
// style={{height: 40, width:100}}
// placeholder="Type here to enter..."
// onChangeText={(text) => this.setState({text})}
// value={this.state.text}
// />
// <Button title={'Press me'} onPress={this.onClickBtn.bind(this)}>Press Me</Button>
