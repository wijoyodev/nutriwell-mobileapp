/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { HOME_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SuccessRegisterComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.blue,
            padding: 20,
            borderRadius: 70,
            marginBottom: 24,
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              padding: 12,
              borderRadius: 50,
            }}>
            <Icon name={'check'} size={24} color={Colors.darkBlue} />
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: Colors.black,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Terima kasih sudah mendaftarkan diri Anda
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
            textAlign: 'center',
            marginTop: 8,
          }}>
          Yuk, mulai belanja dan mengajak orang untuk mendapatkan bonus lebih
          banyak
        </Text>
      </View>
      <CustomButton
        backgroundColor={Colors.blue}
        text={'EKSPLOR HOME'}
        onPress={() => navigate(HOME_SCREEN)}
      />
    </View>
  );
};

export default SuccessRegisterComponent;
