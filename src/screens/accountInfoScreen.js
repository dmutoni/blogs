import { Image, StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { Icon } from 'react-native-elements';
import colors from '../constants/colors';
import Button from './../components/button';
const AccountInfoScreen = ({navigation,route}) => {
    const id = route.id
    return (
        <View>
            <View style={styles.body}>
                <View style={styles.backgroundImage}>
                    <View style={styles.headerContainer}>
                        <Icon name="navigate-before" onPress={() => navigation.goBack()} color="#fff" />
                        <Icon name="sort" color="#fff" />
                    </View>
                    <Image
                        style={styles.profilePic}
                        source={{uri: `https://picsum.photos/200/200?random=${id}`}}
                    />
                </View>
                <View style={styles.positionContainer}>
                    <Text style={styles.position}>Rakim Mayers</Text>
                    <Text>NYC</Text>
                </View>
                <View style={styles.blogDetails}>
                    <Text style={styles.grayText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
                    <View style={styles.popularityContainer}>
                        <View>
                            <Text style={styles.boldText}> 103</Text>
                            <Text style={styles.grayText}>Videos</Text>
                        </View>
                        <View style={styles.horizLine}>

                        </View>
                        <View>
                            <Text style={styles.boldText}>2M</Text>
                            <Text style={styles.grayText}>Followers</Text>
                        </View>
                        <View style={styles.horizLine}>

                        </View>
                        <View>
                            <Text style={styles.boldText}>2106</Text>
                            <Text style={styles.grayText}>Following</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.registerButton} title="Follow" />
                        <Button style={styles.loginButton} textStyles={styles.blackText} title="Message" />
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Image source={require("../../assets/icons/explore.png")} style={styles.navItem} />
                <Image source={require("../../assets/icons/notification.png")} style={styles.navItem} />
                <Image source={require("../../assets/icons/search.png")} style={styles.navItem} />
                <Image source={require("../../assets/icons/profile.png")} style={styles.navItem} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        marginTop: 50
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profilePic: {
        margin: 130,
        width: 100,
        borderRadius: 10,
        height: 100
    },
    backgroundImage: {
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: colors.blueColor,
        borderBottomStartRadius: 100,
        borderBottomEndRadius: 100,
        height: 200,
    },
    horizLine: {
        borderRightColor: colors.grayColor,
        borderRightWidth: 2,
        alignItems: 'center',
        width: 40,
        marginEnd: 10,
        marginVertical: 4
    },
    positionContainer: {
        marginTop: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    position: {
        fontFamily: 'poppins-bold',
        fontSize: 20
    },
    blogDetails: {
        margin: 30
    },
    popularityContainer: {
        marginTop: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    grayText: {
        color: colors.grayColor,
        fontFamily: 'poppins-regular',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '20%'
    },
    registerButton: {
        padding: 12,
        width: '50%',
        borderRadius: 10,
        backgroundColor: colors.mainGreen,
        marginEnd: 10
    },
    loginButton: {
        borderColor: colors.mainGreen,
        padding: 12,
        width: '50%',
        borderWidth: 1,
        borderRadius: 10,
    },
    blackText: {
        color: colors.blackColor,
        fontFamily: 'poppins-regular',
    },
    footer: {
        height:'8%',
        flexDirection:'row', 
        justifyContent:'space-between', 
        padding: 20, 
        paddingHorizontal:30, 
        backgroundColor: colors.black,
    },
    navItem: {
        width: 35, 
        height: 35
    }
})
export default AccountInfoScreen;