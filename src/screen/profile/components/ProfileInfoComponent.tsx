/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileInfoComponent = () => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Image
          source={require('../../../assets/images/product_image.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
          }}
        />
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text
            style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
            John Doe
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Icon name={'mail-outline'} color={Colors.black} />
            <Text style={{ fontSize: 14, color: Colors.black }}>
              johndoe@gmail.com
            </Text>
          </View>
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
