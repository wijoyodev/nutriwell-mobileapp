/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileInfoComponent = () => {
  return (
    <View style={{ padding: 16 }}>
      <View>
        <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
          John Doe
        </Text>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Icon name={'envelope'} color={Colors.black} />
          <Text style={{ fontSize: 14, color: Colors.black }}>
            johndoe@gmail.com
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4 }}>NOMOR TELEPON</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>081293994232</Text>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4 }}>TANGGAL LAHIR</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          7 January 1990
        </Text>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4 }}>JENIS KELAMIN</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>Laki-laki</Text>
      </View>
    </View>
  );
};

export default ProfileInfoComponent;
