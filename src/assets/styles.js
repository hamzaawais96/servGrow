import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: colors.white
    },

    centerContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    mapViewStyle: {
        height: 400
    },

    markerStyle: {
        height: 40,
        width: 40
    },

    addressConatinerStyle: {
        marginTop: 20,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    addressTextStyle: {
        padding: 10,
        fontSize: 18
    },

    locationIconStyle: {
        height: 20,
        width: 20
    },

    buttonStyling: {
        backgroundColor: colors.orange,
        borderWidth: 1,
        borderColor: colors.darkOrange,
        padding: 10,
        width: 350,
        marginVertical: 20
    },

    buttonTextStyling: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.dimBlack,
        fontWeight: '900'
    },

    innverViewStyle: {
        flex: 1,
        margin: 10,
        elevation: 4,
        borderRadius: 2,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },

    inputContainerLeft: {
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    inputContainerRight: {
        width: '5%',
    },

    inputStyle: {
        flex: 1,
        fontSize: 15,
        borderWidth: 0,
        minWidth: 70,
        color: colors.fontColor,
        height: 48,
        paddingHorizontal: 5
    },

    iconStyle: {
        height: 22,
        width: 22,
        tintColor: colors.iconColor
    },

    dropDownListItemStyle: {
        display: 'flex',
        justifyContent: 'center',
        height: 48,
        paddingHorizontal: 5,
        marginVertical: 1
    },

    titleStyle: {
        fontSize: 15,
        color: colors.fontColor,
        paddingHorizontal: 5
    },

    dropDownStyle: {
        marginTop: 1,
        backgroundColor: colors.white,
        elevation: 4,
        borderRadius: 2,
        shadowColor: colors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1
    },

    itemStyle: {
        backgroundColor: colors.grey,
        height: 35,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        marginVertical: 3,
    },
});