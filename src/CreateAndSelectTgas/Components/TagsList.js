import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { imagePath } from '../../assets/imagePath';
import { styles } from '../../assets/styles';
import { HIT_SLOP } from '../../helpers';

const TagsList = ({ tagsSelected, removeTag }) => {
    return (
        <>
            {
                tagsSelected.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemStyle}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <Text>{' '}</Text>
                            <TouchableOpacity onPress={() => removeTag(item)} hitSlop={HIT_SLOP}>
                                <Image style={styles.iconStyle} source={imagePath.close} />
                            </TouchableOpacity>

                        </View>
                    );
                })
            }
        </>
    );
};

export default TagsList;