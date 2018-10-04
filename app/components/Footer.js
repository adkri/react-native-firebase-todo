import React, { Component } from 'react'
import { View, StatusBar, Text, StyleSheet} from 'react-native'

export const Footer = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>{Date.now()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent:'flex-end',
        backgroundColor: 'deepskyblue',
        height: 50
    },
    title: {
        color: "white",
        fontSize:30,
        fontWeight: 'bold'
    }
})
