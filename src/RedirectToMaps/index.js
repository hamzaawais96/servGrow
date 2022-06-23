import React from 'react';
import {
    Image,
    Text, TouchableOpacity, TouchableWithoutFeedback, View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { imagePath } from '../assets/imagePath';
import { styles } from '../assets/styles';
import { openMapDirection } from '../helpers';

const DUMMY_LAT = 37.788046;
const DUMMY_LONG = -122.431108;

const RedirectToMaps = () => {

    const redirectToMap = () => {
        openMapDirection(DUMMY_LAT, DUMMY_LONG);
    };

    return (
        <View style={styles.containerStyle}>

            <MapView
                style={styles.mapViewStyle}
                initialRegion={{
                    latitude: DUMMY_LAT,
                    longitude: DUMMY_LONG,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                minZoomLevel={16}
            >
                <Marker
                    onPress={() => redirectToMap()}
                    coordinate={{ latitude: DUMMY_LAT, longitude: DUMMY_LONG }}>
                    <Image style={styles.markerStyle} source={imagePath.marker} />
                </Marker>
            </MapView>
            <TouchableOpacity onPress={() => redirectToMap()}>
                <View style={styles.addressConatinerStyle}>
                    <Text style={styles.addressTextStyle}>Victorian Post Acute</Text>
                    <Image style={styles.locationIconStyle} source={imagePath.location} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default RedirectToMaps;