import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../assets/styles';

const HomeScreen = ({ navigation }) => {

    const navigetToScreen = (screen) => {
        navigation.navigate(screen);
    };
    return (
        <View style={[styles.containerStyle, styles.centerContainerStyle]}>
            <TouchableOpacity style={styles.buttonStyling} onPress={() => navigetToScreen('TaskOne')}>
                <Text style={styles.buttonTextStyling}>Task: Redirection to Maps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyling} onPress={() => navigetToScreen('TaskTwo')}>
                <Text style={styles.buttonTextStyling}>Task: Add ability to create tags</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
