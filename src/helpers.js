import { Platform, Linking } from "react-native";
import _ from 'lodash';

export const openMapDirection = async (lat, long) => {
    const url = Platform.select({
        ios: `maps://app?saddr=&daddr=${lat},${long}`,
        android: `maps.google.com/maps?saddr=&daddr=${lat},${long}`,
    });

    const supported = await Linking.canOpenURL(url);
    if (supported) {
        return Linking.openURL(url);
    } else {
        return Linking.openURL(`https://www.google.com/maps?saddr=&daddr=${lat},${long}`);
    }
};


export const getRandomId = () => {
    return Math.floor(Math.random() * 6) + 1;
};

export const debouncer = (func) => {
    return _.debounce(func, 300);
};

export const getUpdatedSuggestionList = (listOfItems, selectedItems) => {
    return listOfItems.filter(el => !selectedItems.find(element => element.title === el.title));
};

export const getFilteredSuggestion = (listOfItems, searchText) => {
    return listOfItems.filter(function (item) {
        const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });
};

export const HIT_SLOP = { top: 16, bottom: 16, left: 16, right: 16 };