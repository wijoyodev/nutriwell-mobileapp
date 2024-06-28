/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { BUSINESS_DESCRIPTION_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from 'themes/Colors';

const LearnBusinessComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => navigate(BUSINESS_DESCRIPTION_SCREEN)}
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.orange,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginTop: 16,
        marginHorizontal: 16,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcon name={'paid'} color={Colors.white} size={20} />
        <Text
          style={{
            color: Colors.white,
            fontSize: 14,
            fontWeight: 'bold',
            marginLeft: 16,
          }}>
          Pelajari Bisnis
        </Text>
      </View>

      <Icon name={'chevron-forward-outline'} size={20} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default LearnBusinessComponent;
