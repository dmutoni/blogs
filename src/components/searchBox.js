import { StyleSheet, TextInput, Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import colors from '../constants/colors';

const SearchBox = ({ searchFilterFunction }) => {
    const [search, setSearch] = useState('');
    useEffect(() => {
        searchFilterFunction(search)
    }, [search])
    return (
        <View style={styles.containerSearch}>
            <View style={styles.inputWrapper}>
                <Icon name="search" color="#000" />
                <TextInput onChangeText={(text) => setSearch(text)} value={search} placeholder="Search" style={styles.input} />
            </View>
            <TouchableOpacity style={styles.musicContainer}>
                <Icon name="graphic-eq" color="#000" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    containerSearch: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.inputColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10

    },
    inputWrapper: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        color: '#a3a3a3'
    },
    musicContainer: {
        backgroundColor: '#fff',
        flex: 1,
        borderRadius: 5
    }
})
export default SearchBox;