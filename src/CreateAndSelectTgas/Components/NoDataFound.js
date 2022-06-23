import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles';

const NoDataFound = () => {
    return (
        <View style={styles.dropDownStyle}>
            <View style={styles.dropDownListItemStyle}>
                <Text style={styles.titleStyle}>{`No Options`}</Text>
            </View>

        </View>
    );
};

export default NoDataFound;