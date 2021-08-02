import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './src/reducers'

const Stack = createStackNavigator();

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
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={LandingScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="BlogsScreen" component={BlogsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="BlogDetailsScreen" component={BlogDetailsScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AccountInfoScreen" component={AccountInfoScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
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
