import React from 'react';
import { View, StyleSheet } from 'react-native'

const Circle = props => {
    return (
        <View style={[styles.centre, styles.circle]}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    centre: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      borderRadius: 300,
      height: 300,
      width: 300,
      backgroundColor: "white",
      flex: 0,
      shadowRadius: 100,
      shadowColor: "white",
      shadowOpacity: 1,
    }
  });

export default Circle;