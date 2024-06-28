/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ClaimRewardComponent = () => {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
        Bagaimana cara untuk mencairkan Rewards Anda
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Anda dapat mencairkan rewards dari Homepage atau halaman Rewards. Di
        sana, Anda akan menemukan ikon "Tarik Dana" berwarna biru tepat di
        sebelah "Rewards yang bisa dicairkan". Klik ikon tersebut untuk
        diarahkan ke halaman penarikan dana, di mana Anda dapat memilih jumlah
        rewards yang ingin Anda tarik.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Komisi yang Anda dapatkan akan otomatis ditransfer ke akun rekening bank
        yang telah Anda daftarkan di bagian "Profil". Proses transfer komisi
        biasanya memerlukan waktu 2-3 hari kerja untuk diproses.
      </Text>
    </View>
  );
};

export default ClaimRewardComponent;
