import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import AccountInfoScreen from '../screens/accountInfoScreen';
import BlogDetailsScreen from '../screens/blogDetailsScreen';
import BlogsScreen from '../screens/blogsScreen';
import LandingScreen from '../screens/landingScreen';
import ProfileScreen from '../screens/profileScreen';
import LoginScreen from './../screens/loginScreen';

enableScreens();
const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LandingScreen} options={{headerShown: false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="BlogsScreen" component={BlogsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="BlogDetailsScreen" component={BlogDetailsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="AccountInfoScreen" component={AccountInfoScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default AppStack;