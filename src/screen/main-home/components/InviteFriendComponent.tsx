/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from 'themes/Colors';

const InviteFriendComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => navigate('reward-home')}
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginTop: 16,
        marginHorizontal: 16,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={'user'} color={Colors.white} size={20} />
        <Text
          style={{
            color: Colors.white,
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 16,
          }}>
          Undang Teman Anda Sekarang
        </Text>
      </View>

      <Icon name={'angle-right'} size={20} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default InviteFriendComponent;
