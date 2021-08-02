import { ScrollView, Image, StyleSheet,TouchableOpacity, Text, View } from "react-native";
import React, {useEffect} from 'react';
import { Icon } from 'react-native-elements';
import colors from '../constants/colors';
import { fetchPost } from '../actions/postActions';
import { connect } from 'react-redux';

const BlogDetailsScreen = ({
    navigation,
    dispatch,
    post,
    comments,
    hasErrors,
    route,
    loading,
}) => {
    const { id } = route.params
    useEffect(() => {
        // dispatch(fetchComments(id))
        dispatch(fetchPost(id))
    }, [dispatch])

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.headerContainer}>
                    <Icon iconStyle={styles.leftArrow} name="west" color="#000" onPress={() => navigation.goBack()} />
                </View>  
                <Image
                    style={styles.tinyLogo}
                    source={{uri: `https://picsum.photos/200/200?random=${id}`}}
                />
                <TouchableOpacity style={styles.authorContainer} onPress={() => navigation.navigate("AccountInfoScreen", {id})} >
                    <Text style={styles.grayText}>By </Text>
                    <Text>Kelly Peter</Text>
                </TouchableOpacity>
                <Text style={styles.postTitle}>{post.title}</Text>
                <ScrollView style={styles.postDesriptionContainer}>
                    <Text style={styles.grayText}>{post.body}</Text>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <View style={styles.tinyContainer}>
                        <Icon name="offline-bolt" color="#08b1bd" />
                        <Text style={styles.readText}>Read Complete Story</Text>
                    </View>
                    <View style={styles.tinyContainer}>
                        <Text style={styles.greenText}>Buy Premium Plan</Text>
                        <Icon style={styles.iconName} name="close" color="#b2b2b2" />
                    </View>
                </View>
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
        margin: 30,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    leftArrow: {
        marginTop: 30,
        marginStart: -39,
        justifyContent: 'flex-start'
    },
    tinyLogo: {
        marginVertical: 10,
        width: '100%',
        height: '20%',
        borderRadius: 15
    },
    postTitle: {
        fontFamily: 'poppins-bold',
        fontSize: 23,
        marginBottom: 10
    },
    grayText: {
        color: colors.grayColor,
        fontFamily: 'poppins-regular',
        fontSize: 15,
        // marginBottom: 20
    },
    readText: {
        fontSize: 12,
        fontFamily: 'poppins-regular',
    },
    postDesriptionContainer: {
        width: '100%',
        height: '35%',
    },
    authorContainer: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    footerContainer: {
        flexDirection: 'row',
        backgroundColor: colors.inputColor,
        width: '100%',
        height: '6%',
        padding: 2,
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'space-between',
    },
    tinyContainer: {
        flexDirection: 'row'
    },
    greenText: {
        color: colors.mainGreen,
        fontFamily: 'poppins-regular',
        fontSize: 12
    },
})
const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.comments.comments,
    loading: { post: state.post.loading, comments: state.comments.loading },
    hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
  })

export default connect(mapStateToProps)(BlogDetailsScreen)
