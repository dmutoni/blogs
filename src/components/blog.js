import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import * as React from 'react';
import { Icon } from 'react-native-elements';
import colors from '../constants/colors';
const BlogsComponent = ({ post, navigation }) => {
    return (
        <TouchableOpacity key={post.id} style={styles.postContainer} onPress={() => navigation.navigate("BlogDetailsScreen", { id: post.id })}>
            <ImageBackground source={{ uri: `https://picsum.photos/200/200?random=${post.id}` }} imageStyle={styles.backgroundImage}
                resizeMode="cover"
                style={styles.backgroundImage}>
                <View style={styles.postDate}>
                    <Text> 3 Feb</Text>
                </View>
            </ImageBackground>
            <View style={styles.popularityContainer}>
                <Text style={styles.grayText}>05 Mins Read</Text>
                <Text style={styles.postTitle}>{post.title.substring(1, 30)}</Text>
                <View style={styles.commentsAndLikesContainer}>
                    <View style={styles.likeCommentDetailsContainer}>
                        <Text style={{ fontFamily: 'poppins-bold', }}>22.8k </Text>
                        <Icon name="thumb-up" />
                    </View>
                    <View style={styles.likeCommentDetailsContainer}>
                        <Text style={{ fontFamily: 'poppins-bold' }}>22.8k </Text>
                        <Icon name="maps-ugc" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

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