import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAndSelectTgas from '../CreateAndSelectTgas';
import RedirectToMaps from '../RedirectToMaps';
import HomeScreen from '../HomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen name="TaskOne" component={RedirectToMaps} />
                <Stack.Screen name="TaskTwo" component={CreateAndSelectTgas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
