/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserComponent = () => {
  return (
    <View style={{}}>
      <Text
        style={{
          color: Colors.black,
          fontWeight: 'bold',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 8,
        }}>
        John Doe
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}>
        <Icon name={'envelope'} color={Colors.black} />
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          johndoe@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default UserComponent;
