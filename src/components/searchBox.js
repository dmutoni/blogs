import React from 'react';
import {View, TouchableOpacity, StyleSheet,TextInput} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../constants/colors';

const SearchBox = () => {
    return(
        <View style={styles.container}>
           <View style={styles.inputWrapper}>
              <Icon name="search" color="#000" />
              <TextInput placeholder="Search" style={styles.input} />
           </View>
           <TouchableOpacity style={styles.musicContainer}>
              <Icon name="graphic-eq" color="#000" />
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.inputColor,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        borderRadius: 10

    },
    inputWrapper: {
        width: '90%',
        flexDirection:'row',
        alignItems:'center'
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        color: '#a3a3a3'
    }, 
    musicContainer : {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 5
    }
})

export default SearchBox;
