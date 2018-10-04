import React, { Component } from 'react'
import { View, StyleSheet, Text, ListView, Switch, Button } from 'react-native'

import CheckBox from 'react-native-checkbox';

export default class TodoList extends Component{

  constructor(props){
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})

    this.state = {text: '', dataSource: ds.cloneWithRows(this.props.items) }
  }

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})

    this.setState({
      dataSource: ds.cloneWithRows(nextProps.items)
    })

    console.log("length", nextProps.items.length)
  }

  _renderRow(item){

    //console.log(item)
    return(
      <View style={styles.item} >
        <CheckBox
          label={item.text}
          labelStyle={styles.text}
          onChange={(value) => this.props.handleToggle(item)}
         checked={item.isCompleted || false} />
         <Button title={'x'} onPress={() => this.props.deleteTodo(item)} />
      </View>
    )
  }
  //<Text style={styles.text}>{item.text}</Text>

  render(){
    return(
      <View style={styles.list}>
        <ListView
        dataSource= {this.state.dataSource}
        renderRow = {this._renderRow.bind(this)}
        enableEmptySections={true}

        />
        <Button title={'COnsole props'} onPress={() => console.log(this.props.items)} />
      </View>

    )
  }

}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    height: 400,
    borderWidth: 2,
    paddingTop: 20
  },
  item: {
    alignItems: 'center',
    height: 50,
    //backgroundColor: 'mistyrose',
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 25,
    color: 'black'
  }
})
