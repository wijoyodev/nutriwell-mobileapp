/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        paddingHorizontal: 20,
        borderRadius: 16,
        marginTop: 16,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={'dollar'} color={Colors.white} size={20} />
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

      <Icon name={'angle-right'} size={20} color={Colors.white} />
    </View>
  );
};

export default LearnBusinessComponent;
