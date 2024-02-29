/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from 'themes/Colors';

const LearnBusinessComponent = () => {
  return (
    <View
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
    </View>
  );
};

export default LearnBusinessComponent;
