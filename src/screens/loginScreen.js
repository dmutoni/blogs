import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/button';
import Input from '../components/input';
import colors from '../constants/colors';
const LoginScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/logo-removebg-preview.png')}
        />
        <Text style={styles.welcomeText}>Welcome to Blog Posts</Text>
        <Text style={styles.text}>Enter your email address and password </Text>
        <Text style={styles.AccessText}> to access your account</Text>
        <View style={styles.inputContainer}>
            <Input placeholder="Email"/>
            <Input secureTextEntry={true} placeholder="Password"/>
        </View>
        <Button
            style={styles.button}
            onPress={() => navigation.navigate("BlogsScreen")}
            title="Login"/>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#fff"
    },
    tinyLogo: {
        width: 70,
        marginLeft: '10%',
        marginTop: '35%',
        marginBottom: '20%',
        height: 100,
    },
    welcomeText: {
        marginLeft: 20,
        fontSize: 25,
        fontFamily: 'poppins-bold',
        padding: 5,
    },
    text: {
        color: colors.grayColor,
        fontFamily: 'poppins-regular',
        marginLeft: 10,
        lineHeight: 21,
        letterSpacing: 0.8
    },
    AccessText: {
        color: colors.grayColor,
        marginLeft: 45,
        fontFamily: 'poppins-regular',
        lineHeight: 21,
        letterSpacing: 0.8
    },
    inputContainer: {
        width: '90%',
    },
    button: {
        marginTop: 20,
        padding: 13,
        borderRadius: 30,
        width: '90%',
        backgroundColor: colors.mainGreen,
    }
})
export default LoginScreen;
