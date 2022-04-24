import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants';
import {useDispatch} from 'react-redux';
import {placeActions} from '../../store/action';
import ImageSelector from '../../components/molecules/image-selector';
import LocationSelector from '../../components/molecules/location-selector';

const NewPlace = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState(null);

  const handleNameChange = text => setName(text);
  const handleSavePlace = () => {
    const {latitude, longitude} = location;
    dispatch(placeActions.addPlace(name, image, latitude, longitude));
    navigation.navigate('Place');
  };
  const handleOnImage = uri => {
    setImage(uri);
  };

  const handleOnLocation = location => {
    setLocation(location);
  };

  const handleOnMapLocation = () => {
    navigation.navigate('Map', {
      location,
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={handleNameChange}
          value={name}
        />
        <ImageSelector onImage={handleOnImage} />
        <LocationSelector
          onLocation={handleOnLocation}
          onMapLocation={handleOnMapLocation}
        />
      </View>
      <View style={styles.container}>
        <Button
          title="Guardar"
          onPress={() => handleSavePlace()}
          color={COLORS.primaryColor}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
