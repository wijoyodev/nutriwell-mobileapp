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
    <View
      style={{ flex: 1, backgroundColor: Colors.white }}>
      <EditProfileComponent />
      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <CustomButton
          onPress={goBack}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
