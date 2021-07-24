import React from 'react';
import { View, Button, Text } from 'react-native';

const Navbar = () => {
    return (
        <View style={{
            display: "flex",
            flexDirection: "vertical",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            backgroundColor : "red",
            padding : "100px"
          }}>
            <Text>test?</Text>
        </View>
    )
}

export default Navbar