import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/landingScreen';
import LoginScreen from './src/screens/loginScreen';
import BlogsScreen from './src/screens/blogsScreen';
import BlogDetailsScreen from './src/screens/blogDetailsScreen';
import AccountInfoScreen from './src/screens/accountInfoScreen';
import ProfileScreen from './src/screens/profileScreen';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/reducers'

const Drawer = createDrawerNavigator();

const getFonts = () =>
    Font.loadAsync({
        "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={LandingScreen} />
                        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                        <Drawer.Screen name="BlogsScreen" component={BlogsScreen} />
                        <Drawer.Screen name="BlogDetailsScreen" component={BlogDetailsScreen} />
                        <Drawer.Screen name="AccountInfoScreen" component={AccountInfoScreen} />
                        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </Provider>
        );

    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => {
                    setFontsLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
