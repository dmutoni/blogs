import { ScrollView, Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import * as React from 'react';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import SearchBox from '../components/searchBox';
const BlogsComponent = ({ navigation }) => {
    return <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <View>
                    <View
                        style={styles.horizLine}
                    />
                    <View
                        style={[styles.horizLine, styles.firstHoriz]}
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/images/profilePicture.png')}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.boldText}>Blogs</Text>
                <SearchBox />
            </View>
            <ScrollView>
                <View style={styles.postContainer}>
                    <ImageBackground source={require('../../assets/images/profilePicture.png')} imageStyle={styles.backgroundImage}
                        resizeMode="cover"
                        style={styles.backgroundImage}>
                        <View style={styles.postDate}>
                            <Text> 3 Feb</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.popularityContainer}>
                        <Text style={styles.grayText}>05 Mins Read</Text>
                        <Text style={styles.postTitle}>Make design systems people want to use</Text>
                        <View style={styles.commentsAndLikesContainer}>
                            <View style={styles.likeCommentDetailsContainer}>
                                <Text>22.8k </Text>
                                <Icon name="thumb-up" />
                            </View>
                            <View style={styles.likeCommentDetailsContainer}>
                                <Text>22.8k </Text>
                                <Icon name="maps-ugc" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.postContainer}>
                    <ImageBackground source={require('../../assets/images/profilePicture.png')} imageStyle={styles.backgroundImage}
                        resizeMode="cover"
                        style={styles.backgroundImage}>
                        <View style={styles.postDate}>
                            <Text> 3 Feb</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.popularityContainer}>
                        <Text style={styles.grayText}>05 Mins Read</Text>
                        <Text style={styles.postTitle}>Make desfdaign systems people want to use</Text>
                        <View style={styles.commentsAndLikesContainer}>
                            <View style={styles.likeCommentDetailsContainer}>
                                <Text>22.8k </Text>
                                <Icon name="thumb-up" />
                            </View>
                            <View style={styles.likeCommentDetailsContainer}>
                                <Text>22.8k </Text>
                                <Icon name="maps-ugc" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.postContainer}>
                    <ImageBackground source={require('../../assets/images/profilePicture.png')} imageStyle={styles.backgroundImage}
                        resizeMode="cover"
                        style={styles.backgroundImage}>
                        <View style={styles.postDate}>
                            <Text> 3 Feb</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.popularityContainer}>
                        <Text style={styles.grayText}>05 Mins Read</Text>
                        <Text style={styles.postTitle}>Make design systems people want to use</Text>
                        <View style={styles.commentsAndLikesContainer}>
                            <View style={styles.likeCommentDetailsContainer}>
                                <Text>22.8k </Text>
                                <Icon name="thumb-up" />
                            </View>
                            <View style={styles.likeCommentDetailsContainer}>
                                <Text>22.8k </Text>
                                <Icon name="maps-ugc" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        margin: 30
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    horizLine: {
        borderBottomColor: colors.blackColor,
        borderBottomWidth: 2,
        alignItems: 'center',
        width: 40,
        marginEnd: 10,
        marginVertical: 4
    },
    firstHoriz: {
        width: 25,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 25
    },
    postContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    backgroundImage: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 120,
        height: 140,
        borderRadius: 5
    },
    popularityContainer: {
        width: '50%'
    },
    commentsAndLikesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    grayText: {
        color: colors.grayColor
    },
    postTitle: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    tinyImage: {
        width: 140,
        height: 120,
        borderRadius: 5
    },
    likeCommentDetailsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    postDate: {
        margin: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 25
    }
});
export default BlogsComponent;