import React from 'react';
import { View } from 'react-native';
import { styles } from '../../assets/styles';
import { getRandomId } from '../../helpers';
import Tag from './Tag';

const FilteredList = ({ list, addTag, tagAlreadyExists, tag }) => {
    return (
        <View style={styles.dropDownStyle}>
            {tagAlreadyExists ?
                list.map((item, index) => {
                    return (
                        <View key={index.toString()}>
                            <Tag title={item.title} index={index} addNewTag={() => addTag(item)} />
                        </View>
                    );
                })
                : (
                    <View>
                        <Tag title={`Create "${tag}"`} addNewTag={() => addTag({ id: getRandomId(), title: tag })} />
                    </View>
                )
            }
        </View>
    );
};

export default FilteredList;