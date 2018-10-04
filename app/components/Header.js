import React, { Component } from 'react'
import { View, StatusBar, Text, StyleSheet} from 'react-native'

export const Header = () => {
  return(
    <View style={styles.container}>
      <StatusBar
         backgroundColor="deepskyblue"
         barStyle="light-content"
        />
        <Text style={styles.title}>Todo List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'deepskyblue',
        height: 50
    },
    title: {
        color: "white",
        fontSize:30,
        fontWeight: 'bold'
    }
})
