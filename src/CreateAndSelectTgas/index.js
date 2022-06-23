import React, { useState, useRef } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { styles } from '../assets/styles';
import { getFilteredSuggestion, getUpdatedSuggestionList } from '../helpers';
import ClearItems from './Components/ClearItems';
import FilteredList from './Components/FilteredList';
import NoDataFound from './Components/NoDataFound';
import TagsList from './Components/TagsList';
import * as List from './serverTags.json';

const CreateAndSelectTgas = () => {
    const inputRef = null;
    const [showDropDownList, setShowDropDownList] = useState(false);
    const [listOfItems, setListOfItems] = useState(List.data);
    const [filteredList, setFilteredList] = useState(listOfItems);
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [tagExists, setTagExists] = useState(true);
    const [alreadyCreated, setAlreadyCreated] = useState(false);

    const searchForTags = (searchText) => {
        setSearchText(searchText);
        if (searchText) {
            setShowDropDownList(true);
            const newData = getFilteredSuggestion(listOfItems, searchText);

            if (newData.length > 0) {
                setAlreadyCreated(false);
                setFilteredList(newData);
                setTagExists(true);
            } else {
                if (selectedItems.findIndex((item) => item.title === searchText) > -1) {
                    setShowDropDownList(false);
                    setAlreadyCreated(true);
                }
                else {
                    setAlreadyCreated(false);
                    setTagExists(false);
                }
            }
        } else {
            setAlreadyCreated(false);
            setTagExists(true);
            setShowDropDownList(true);
            setFilteredList(listOfItems);
        }
    };

    const addNewTag = (item) => {
        setShowDropDownList(false);

        selectedItems.push(item);
        setSelectedItems(selectedItems);

        if (selectedItems && selectedItems.length > 0) {
            let res = [];
            res = getUpdatedSuggestionList(listOfItems, selectedItems);

            setListOfItems(res);
            setFilteredList(res);
        }
        setSearchText('');
    };

    const removeTag = (tag) => {
        const data = selectedItems.filter((item) => item.title !== tag.title);
        setSelectedItems(data);
        setShowDropDownList(false);
        listOfItems.push(tag);
        setListOfItems(listOfItems);
    };

    const resetLists = () => {
        setShowDropDownList(true);
        setSelectedItems([]);
        setListOfItems(List.data);
        setFilteredList(List.data);
        setSearchText('');
        setTagExists(true);
        setAlreadyCreated(false);
        if (inputRef) {
            inputRef.current.focus();
        }
    };

    const inputFieldFocused = () => {
        setShowDropDownList(true);
        setFilteredList(listOfItems);
        setTagExists(true);
    };

    const renderDropDown = () => {
        if (showDropDownList) { return <FilteredList list={filteredList} addTag={(item) => addNewTag(item)} tagAlreadyExists={tagExists} tag={searchText} />; }
        else if (alreadyCreated) { return <NoDataFound />; }
    };

    return (

        <ScrollView keyboardShouldPersistTaps='handled' style={styles.containerStyle}>
            <View style={styles.innverViewStyle}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputContainerLeft}>
                        <TagsList tagsSelected={selectedItems} removeTag={(item) => removeTag(item)} />
                        <TextInput
                            ref={inputRef}
                            style={styles.inputStyle}
                            onChangeText={(e) => searchForTags(e)}
                            value={searchText}
                            onPressIn={() => inputFieldFocused()}
                            onBlur={() => setShowDropDownList(false)}
                        />
                    </View>
                    <View style={styles.inputContainerRight}>

                        {
                            selectedItems && selectedItems.length > 0 &&
                            <ClearItems clear={() => resetLists()} />

                        }
                    </View>
                </View>
                {renderDropDown()}
            </View>
        </ScrollView>

    );
};

export default CreateAndSelectTgas;