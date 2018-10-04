import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, ListView, Button, StatusBar, ToolbarAndroid, Keyboard  } from 'react-native'
import { Header, Footer} from './components'
import TodoList from './components/TodoList'

import {rootRef} from './lib/firebaseRef'
const itemsRef = rootRef.child('items')


export default class Todo extends Component {
  constructor(props){
      super(props)
      this.state = {
        currentTodo: ' ',
        items: []
      }

  }

  componentDidMount(){
    itemsRef.on('child_added', item => {

      let newItem = item.val()
      newItem.id  = item.key
      this.setState({
        items: this.state.items.concat(newItem)
      })
      console.log("downloading new child")

    });
  }
  handleSubmit = (evt) => {
    Keyboard.dismiss()
    let newItem = { text: this.state.currentTodo, isCompleted: false}

    itemsRef.push(newItem)
    this.setState({
      currentTodo: ''
    })
  }

  handleToggle = (item) => {
    console.log(item.id)

    const newItem  = {id: item.id ,text: item.text, isCompleted: !item.isCompleted };

    let index = this.state.items.findIndex(data=> data.id === item.id)
    let updatedItems = this.state.items;
    updatedItems[index] = newItem;
    this.setState({items: updatedItems })

    var updatedItem = {};
    updatedItem[item.id] = newItem ;
    itemsRef.update(updatedItem)


  }

  handleDelete = (item) => {
    console.log("delete ",item.id)

    let index = this.state.items.findIndex(data=> data.id === item.id)
    let currentItems = this.state.items;
    updatedItems = [...currentItems.slice(0,index),...currentItems.slice(index+1)]
    this.setState({items: updatedItems })

    itemsRef.child(item.id).remove()
  }

  render(){
      return(
        <View>

          <Header />
          <View style={styles.addTodo}>
            <TextInput
              style={{height: 50}}
              placeholder="Enter todo here.."
              value={this.state.currentTodo}
              onChangeText={(text) => this.setState({currentTodo: text})}
              style={styles.input}
              onEndEditing={this.clearFocus}
              />
              <Button style={styles.button} title={'Press me'} onPress={this.handleSubmit} />
          </View>
          <TodoList
            items={this.state.items}
            handleToggle={this.handleToggle}
            deleteTodo={this.handleDelete} />

        </View>
      )
  }
}

const styles = StyleSheet.create({
  addTodo: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    flexGrow: 2
  },
  button: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})
