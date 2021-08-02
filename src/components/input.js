import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../constants/colors';


const Input = props => {
    return <View style={styles.container}>
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    </View>
}
const styles = StyleSheet.create({
    input: {
        height: 45,
        borderRadius: 4,
        backgroundColor: colors.inputColor,
        paddingHorizontal: 10,
        width: '100%',
        borderWidth: 0,
        marginVertical: 10
    }
})
export default Input;
