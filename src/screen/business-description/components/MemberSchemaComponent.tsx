/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';

const MemberSchemaComponent = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
        Bagaimana menjadi member dari Garam Garena
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Di dalam aplikasi ini, hanya mereka yang menerima kode referral yang
        bisa melakukan registrasi. Aplikasi ini menggunakan struktur upline dan
        downline. Upline Anda terdiri dari satu orang yang mengundang Anda
        bergabung. Downline Anda mencakup jaringan orang yang Anda undang untuk
        mendaftar menggunakan kode referral Anda. Berbeda dengan upline,
        downline memiliki beberapa level: Level 1 hingga Level 5. Level 1 hanya
        bisa menampung 10 orang pertama yang menggunakan kode referral Anda
        untuk registrasi. Level 2 hingga Level 5 diisi oleh anggota downline
        yang menggunakan kode referral downline Anda untuk bergabung. Apa yang
        terjadi jika Anda sudah mengundang 10 orang dan Level 1 sudah penuh?
        Anggota baru yang menggunakan kode referral Anda akan tetap otomatis
        menjadi downline Anda di level berikutnya yang masih tersedia. Berikut
        adalah tabel untuk kuota masing-masing level.
      </Text>

      <Image
        style={{
          marginTop: 16,
          width: width - 32,
          height: height / 3.5,
        }}
        resizeMethod={'auto'}
        resizeMode={'contain'}
        source={require('../../../assets/images/member-level-kuota.png')}
      />
    </View>
  );
};

export default MemberSchemaComponent;
