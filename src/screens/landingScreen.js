import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import Button from './../components/button';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.upperCircle}></View>
                <Text style={styles.grayText}>Get started</Text>
                <Text style={styles.boldText}>Publish Your</Text>
                <Text style={styles.boldText}>Passion in Own Way</Text>
                <Text style={styles.boldText}>It's Free</Text>
                <View style={styles.linesHandler}>
                    <View
                        style={[styles.horizLine, styles.firstHoriz]}
                    />
                    <View
                        style={styles.horizLine}
                    />
                    <View
                        style={styles.horizLine}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button style={styles.registerButton} title="Register" />
                    <Button onPress={() => navigation.navigate("LoginScreen")} style={styles.loginButton} textStyles={styles.blackText} title="Login" />
                </View>
                <View style={styles.contactContainer}>
                    <Icon name="check-circle-outline" color="#000" />
                    <Text style={{fontFamily : 'poppins-regular'}}> Continue with </Text>
                    <Text style={styles.phoneText}>Phone no.</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    body: {
        margin: 40
    },
    upperCircle: {
        width: 20,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        height: 40,
        backgroundColor: colors.blackColor,
        marginBottom: '100%'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    registerButton: {
        padding: 12,
        width: '45%',
        borderRadius: 30,
        backgroundColor: colors.mainGreen,
        marginEnd: 10
    },
    grayText: {
        color: colors.grayColor,
        marginBottom: 30,
        fontFamily : 'poppins-regular'
    },
    blackText: {
        color: colors.blackColor,
        fontFamily : 'poppins-bold'
    },
    boldText: {
        // fontWeight: 'bold',
        fontFamily : 'poppins-bold',
        fontSize: 20
    },
    phoneText: {
        fontFamily : 'poppins-bold',
    },
    loginButton: {
        borderColor: colors.grayColor,
        padding: 12,
        width: '40%',
        borderWidth: 1,
        borderRadius: 30,
    },
    horizLine: {
        borderBottomColor: colors.grayColor,
        borderBottomWidth: 3,
        width: '3%',
        marginEnd: 10,
        marginVertical: 20
    },
    linesHandler: {
        flexDirection: 'row'
    },
    firstHoriz: {
        borderBottomColor: colors.blackColor
    },
    contactContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        width: '45%',
        justifyContent: 'space-between'
    }
});
export default LandingScreen;