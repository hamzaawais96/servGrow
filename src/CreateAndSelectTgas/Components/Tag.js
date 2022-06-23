import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles';

const Tag = ({ title, addNewTag }) => {
    return (
        <TouchableOpacity style={styles.dropDownListItemStyle} onPress={addNewTag}>
            <Text style={styles.titleStyle}>{title}</Text>
        </TouchableOpacity>
    );

};

export default Tag;