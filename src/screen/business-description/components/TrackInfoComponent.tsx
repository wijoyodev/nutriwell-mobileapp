/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TrackInfoComponent = () => {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
        Bagaimana cara untuk memesan dan melacak pengiriman Anda
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Pemesanan dapat dilakukan langsung melalui halaman Produk. Biaya
        pengiriman ke alamat Anda akan dikalkulasikan pada saat Anda melakukan
        pemesanan. Setelah pembayaran dilakukan, pesanan Anda akan secara
        otomatis muncul di halaman Histori Pesanan yang dapat ditemukan pada
        bagian Profile di aplikasi Anda. Anda dapat dengan mudah melacak setiap
        tahap pesanan Anda melalui Histori Pesanan.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
          marginBottom: 42,
        }}>
        Jika Anda membutuhkan informasi lebih lanjut atau memiliki pertanyaan
        mengenai aplikasi Garam Garena dan pesanan Anda, silahkan langsung
        menghubungi Customer Service kami melalui Chat.
      </Text>
    </View>
  );
};

export default TrackInfoComponent;
