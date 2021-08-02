import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import Button from './../components/button';
import { Icon } from 'react-native-elements';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: 's1',
        text: 'Publish Your Passion in Own Way Its Free'
    },
    {
        key: 's2',
        text: 'Make sure you leave a post 😋'
    },
    {
        key: 's3',
        text: 'Please subcribe to ever post'
    }

];
const LandingScreen = ({ navigation }) => {
    const [showRealOnboard, setShowRealOnboard] = useState(false);
    const onDone = () => {
        setShowRealApp(true);
    };
    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({ item }) => {
        return (
            <View
                style={styles.slide}>
                <Text style={styles.boldText}>
                    {item.text}
                </Text>
            </View>
        );
    };

    const renderPagination = (index) => {
        return (
            <View style={styles.paginationContainer}>
                <Text style={
                    (index === 0) ?
                        styles.activePaginationItem :
                        styles.paginationItem
                }>
                </Text>
                <Text style={
                    (index === 1) ?
                        styles.activePaginationItem :
                        styles.paginationItem
                }>
                </Text>
                <Text style={
                    (index === 2) ?
                        styles.activePaginationItem :
                        styles.paginationItem
                }>
                </Text>
            </View>
        )
    }
    return (
        <>
            {showRealOnboard ? (
                <Text> error </Text>
            ) : (
                <>
                    <View style={styles.body}>
                    <View style={styles.upperCircle}></View>
                    <Text style={styles.grayText}>Get started</Text>
                    </View> 
                    <AppIntroSlider
                        data={slides}
                        renderItem={RenderItem}
                        onDone={onDone}
                        showSkipButton={true}
                        showSkipButton={false}
                        showNextButton={false}
                        showDoneButton={false}
                        dotClickEnabled={false}
                        bottomButton={true}
                        renderPagination={renderPagination}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.registerButton} title="Register" />
                        <Button onPress={() => navigation.navigate("LoginScreen")} style={styles.loginButton} textStyles={styles.blackText} title="Login" />
                    </View>
                    <View style={styles.contactContainer}>
                        <Icon name="check-circle-outline" color="#000" />
                        <Text style={{ fontFamily: 'poppins-regular' }}> Continue with </Text>
                        <Text style={styles.phoneText}>Phone no.</Text>
                    </View>
                </>
            )}
        </>
    );
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
        margin: 50
    },
    registerButton: {
        padding: 12,
        width: '30%',
        borderRadius: 30,
        backgroundColor: colors.mainGreen,
        marginEnd: 10
    },
    grayText: {
        color: colors.grayColor,
        fontFamily: 'poppins-regular'
    },
    blackText: {
        color: colors.blackColor,
        fontFamily: 'poppins-bold'
    },
    boldText: {
        color: colors.blackColor,
        fontFamily: 'poppins-bold',
        fontSize: 25,
    },
    phoneText: {
        fontFamily: 'poppins-bold',
    },
    loginButton: {
        borderColor: colors.grayColor,
        padding: 12,
        width: '30%',
        borderWidth: 1,
        borderRadius: 30,
    },
    contactContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        width: '45%',
        marginHorizontal: 50,
        justifyContent: 'space-between'
    },
    slide: {
        marginHorizontal: 40,
        width: '90%',
        height: 20
    },
    paginationContainer: {
        width: '30%',
        flexDirection: 'row',
        marginLeft: 45,
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    paginationItem: {
        width: 25,
        height: 3,
        backgroundColor: colors.grayColor,
        borderRadius: 10
    },
    activePaginationItem: {
        width: 25,
        height: 3,
        backgroundColor: colors.blackColor,
        borderRadius: 10
    },
});
export default LandingScreen;