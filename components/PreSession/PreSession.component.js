import React, { useState } from 'react';
import Circle from '../../UI/Circle/Circle.component';
import { View, StyleSheet, Button, TextInput } from 'react-native'

const PreSession = props => {
    
    const [mins, setMins] = useState(20);
    const [secs, setSecs] = useState(0);
    
    return(
        <Circle>
            <View style={{display : "flex"}}>
                <TextInput
                    style={styles.input}
                    onChangeText={setMins}
                    value={mins.toString()}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSecs}
                    value={secs.toString()}
                />
            </View>
            <Button
                title="Set"
                onPress={() => props.submit(mins, secs)}
            />
        </Circle>
    )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor : "transparent",
        height : 100,
        width : 100,
    }
})

export default PreSession;