import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from 'react';
import colors from '../constants/colors';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions'
import BlogsComponent from './../components/blog';
import SearchBox from './../components/searchBox';
import { color } from "react-native-reanimated";


const BlogsScreen = ({ navigation, dispatch, loading, loadingErrors, posts, hasErrors }) => {

  const [filteredPosts, setfilteredPosts] = useState([]);
  const [reRender, setreRender] = React.useState(true);
  const [showPostsList, setShowPostsLists] = useState(true);
  const [foundResults, setFoundResults] = useState(true);
  const [textToRender, setTextToRender] = useState('Latest');

  useEffect(() => {
    dispatch(fetchPosts())
    if (reRender) {
      setfilteredPosts(posts)
      setTimeout(() => setreRender(false), 3000);
    }
  }, [dispatch])

  const handleTextToRender = (type) => {
    setTextToRender(type)
  }
  const searchFilterFunction = (searchItem) => {
    if (searchItem) {
      const newData = posts.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = searchItem.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      if (newData.length === 0) {
        setFoundResults(false)
      }
      setfilteredPosts(newData);
      setShowPostsLists(false);
      setFoundResults(true)
    } else {
      setFoundResults(true)
      setfilteredPosts(posts);
    }
  };
  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/images/profilePicture.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.boldText}>{textToRender} blogs</Text>
          <SearchBox searchFilterFunction={searchFilterFunction} />
        </View>
        {!foundResults && <Text style={styles.resultText}>Results not found</Text>}
       {textToRender === 'Latest' && <FlatList
          style={styles.globalPostContainer}
          showsVerticalScrollIndicator={false}
          data={(showPostsList) ? posts : filteredPosts}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => (
            <BlogsComponent post={item} />
          )}
        />}
        {textToRender === 'Feautured' && <FlatList
          style={styles.globalPostContainer}
          showsVerticalScrollIndicator={false}
          data={(showPostsList) ? posts : filteredPosts}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => (
            <BlogsComponent post={item} />
          )}
        />}
         {textToRender === 'Premium' && <FlatList
          style={styles.globalPostContainer}
          showsVerticalScrollIndicator={false}
          data={(showPostsList) ? posts : filteredPosts}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => (
            <BlogsComponent post={item} />
          )}
        />}
        <View style={styles.proText}>
          <Text style={[textToRender === 'Premium' ? styles.activeTypePost : '']}>Pro</Text>
        </View>
        <View style={styles.filtersContainer}>
          <TouchableWithoutFeedback style={styles.activeLine} onPress={() => handleTextToRender('Latest')}>
            <Text style={[styles.grayText, textToRender === 'Latest' ? styles.activeTypePost : '']}>Latest</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleTextToRender('Feautured')}>
            <Text style={[styles.grayText, textToRender === 'Feautured' ? styles.activeTypePost : '']}>Featured</Text>
          </TouchableWithoutFeedback>
          <TouchableOpacity >
            <Text style={[styles.grayText, textToRender === 'Premium' ? styles.activeTypePost : '']} onPress={() => handleTextToRender('Premium')}>Premium</Text>
          </TouchableOpacity>
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
    margin: 30
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0
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
  activeLine: {
    borderBottomColor: colors.mainGreen,
    borderBottomWidth: 2,
    alignItems: 'center',
    width: 25
  },
  firstHoriz: {
    width: 25,
  },
  boldText: {
    fontFamily: 'poppins-bold',
    fontSize: 25
  },
  globalPostContainer: {
    height: '65%'
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
    width: 150,
    height: 140,
    borderRadius: 15,
    marginEnd: 10
  },
  popularityContainer: {
    width: '45%'
  },
  commentsAndLikesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  grayText: {
    color: colors.grayColor,
    fontFamily: 'poppins-regular',
  },
  proText: {
    backgroundColor: '#ffd56e',
    width: '10%',
    alignItems: 'center',
    fontFamily: 'poppins-regular',
    borderRadius: 10,
    marginStart: '75%'
  },
  postTitle: {
    marginVertical: 5,
    fontSize: 16,
    fontFamily: 'poppins-bold',
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
    fontFamily: 'poppins-regular',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25
  },
  filtersContainer: {
    flexDirection: 'row',
    width: '80%',
    marginStart: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  resultText: {
    fontFamily: 'poppins-bold',
    margin: 100,
    alignItems: 'center'
  },
  activeTypePost: {
    fontFamily: 'poppins-bold',
    color: '#000'
  }
});

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(BlogsScreen)