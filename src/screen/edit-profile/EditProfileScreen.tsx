/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { View } from 'react-native';
import Colors from 'themes/Colors';
import EditProfileComponent from './components/EditProfileComponent';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const EditProfileScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, padding: 16 }}>
      <EditProfileComponent />
      <CustomButton
        onPress={goBack}
        backgroundColor={Colors.blue}
        text={'SIMPAN'}
      />
    </View>
  );
};

export default EditProfileScreen;
