import { TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { imagePath } from '../../assets/imagePath';
import { styles } from '../../assets/styles';
import { HIT_SLOP } from '../../helpers';

const ClearItems = ({ clear }) => {
    return (
        <TouchableOpacity onPress={clear} hitSlop={HIT_SLOP}>
            <Image style={styles.iconStyle} source={imagePath.close} />
        </TouchableOpacity>
    );
};

export default ClearItems;