import { Image, StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { Icon } from 'react-native-elements';
import colors from '../constants/colors';

const ProfileScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <Icon name="navigate-before" onPress={() => navigation.goBack()} color="#000" />
                <Text style={styles.headerTitle}>Profile</Text>
            </View>
            <View>
                <Image
                    style={styles.profilePic}
                    source={require('../../assets/images/profilePicture.png')}
                />
                <View>
                    <Text style={styles.title}>Welcome, Rakim Mayers</Text>
                    <Text style={styles.grayText}>Manage your personal info, privacy security and app settings.</Text>
                </View>
                <View style={styles.accountTitleContainer}>
                    <Icon name="account-circle" onPress={() => navigation.goBack()} color="#000" />
                    <Text style={styles.title}> Account</Text>
                </View>
                <View style={styles.horizLine}>

                </View>
                <View style={styles.profileDetailsContainer}>
                    <Text style={styles.grayNormalText}>Personal Info</Text>
                    <Icon name="chevron-right" onPress={() => navigation.goBack()} color="#b2b2b2" />
                </View>
                <View style={styles.profileDetailsContainer}>
                    <Text style={styles.grayNormalText}>Password & Security</Text>
                    <Icon name="chevron-right" onPress={() => navigation.goBack()} color="#b2b2b2" />
                </View>
                <View style={styles.profileDetailsContainer}>
                    <Text style={styles.grayNormalText}>App theme</Text>
                    <Icon name="chevron-right" onPress={() => navigation.goBack()} color="#b2b2b2" />
                </View>
                <View style={styles.accountTitleContainer}>
                    <Icon name="notifications" onPress={() => navigation.goBack()} color="#000" />
                    <Text style={styles.title}> Notifications</Text>
                </View>
                <View style={styles.horizLine}>

                </View>
                <View style={styles.profileDetailsContainer}>
                    <Text style={styles.grayNormalText}>Notification</Text>
                    <Icon name="toggle-on" color="#b2b2b2" />
                </View>
            </View>
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    body: {
        marginTop: 40,
        marginHorizontal: 30
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headerTitle: {
        marginLeft: 100,
        fontSize: 18,
        fontFamily: 'poppins-bold',
    },
    profilePic: {
        width: '100%',
        marginVertical: 20,
        borderRadius: 15
    },
    title: {
        fontFamily: 'poppins-bold',
        fontSize: 20
    },
    grayText: {
        color: colors.grayColor,
        marginVertical: 20
    },
    accountTitleContainer: {
        flexDirection: 'row',
    },
    horizLine: {
        borderBottomColor: colors.grayColor,
        borderBottomWidth: 0.5,
        alignItems: 'center',
        width: '100%',
        marginEnd: 10,
        marginVertical: 4
    },
    profileDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    grayNormalText: {
        color: colors.grayColor,
        fontFamily: 'poppins-regular',
    }
})
export default ProfileScreen;