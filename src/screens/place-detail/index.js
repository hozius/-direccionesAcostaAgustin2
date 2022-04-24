import React, {useEffect} from 'react';
import { View, Text, Button, Image } from 'react-native';
import { colors } from '../../constants/themes';
import { styles } from './styles';
import {MAPS} from '../../constants/index';
import {useSelector, useDispatch} from 'react-redux';

const PlaceDetail = ({ route }) => {
    const { id } = route.params;
    const place = useSelector(state => state.places.places.find(place => place.id === id))

    const mapPreviewUrl = place
    ? `${MAPS.URL}/staticmap?center=${place.latitude},${place.longitude}&zoom=${MAPS.ZOOM}&size=${MAPS.SIZE}&maptype=${MAPS.MAP_TYPE}&markers=color:blue%7Clabel:S%7C${place.latitude},${place.longitude}&key=${MAPS.API_KEY}`
    : '';
    return (
        <View style={styles.details}>
            <Text style={styles.name}>{place.name}</Text>
            <Image source={{uri: place.image}} style={styles.image} />          
            <Text style={styles.address}>Dirección:     {place.address}</Text>
            <Text style={styles.address}>Latitud:          {place.latitude}</Text>
            <Text style={styles.address}>Longitud:       {place.longitude}</Text>
            <Image style={styles.image} source={{uri: mapPreviewUrl}} />

        </View>
    )
}

export default PlaceDetail;