/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RewardInfoComponent = () => {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
        Bagaimana cara untuk mengetahui Rewards yang telah Anda dapatkan
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Untuk mengetahui jumlah rewards yang telah Anda peroleh, Anda bisa
        melihatnya dari Homepage atau halaman Rewards. Anda dapat mengakses
        halaman Rewards dengan mengklik ikon Rewards pada toolbar bagian bawah.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Pada kedua halaman tersebut terdapat informasi tentang "Rewards yang
        dapat dicairkan" dan "Rewards bulan ini". Rewards yang dapat dicairkan
        mencakup total rewards yang telah Anda kumpulkan dari bulan-bulan
        sebelumnya. Sementara itu, rewards bulan ini adalah jumlah rewards yang
        Anda peroleh dalam bulan yang sedang berjalan. Rewards bulan ini hanya
        dapat dicairkan pada akhir bulan dan tidak dapat dicairkan di tengah
        bulan, sedangkan rewards yang telah anda dapatkan dari bulan-bulan
        sebelumnya dapat dicairkan kapan saja.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Jika Anda ingin mendapatkan informasi yang lebih detail tentang komisi
        yang Anda dapatkan dari setiap pembelian downline Anda, Anda bisa
        langsung menuju ke halaman Rewards. Di bagian Transaksi, Anda dapat
        dengan mudah melihat setiap komisi yang Anda terima dari pembelian
        downline Anda.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Untuk dapat melihat dan mencairkan rewards, Anda harus aktif sebagai
        anggota dengan membeli minimal satu produk setiap bulannya. Jika Anda
        memenuhi syarat ini, Anda dapat melihat rewards yang Anda dapatkan pada
        bulan itu serta rewards yang sudah Anda kumpulkan dari bulan-bulan
        sebelumnya yang dapat dicairkan. Namun, jika Anda tidak membeli minimal
        satu produk dalam satu bulan tertentu, Anda tidak akan dapat melihat
        rewards dan mendapatkan rewards pada bulan itu . Selain itu, rewards
        yang sudah Anda kumpulkan dari bulan-bulan sebelumnya juga tidak dapat
        Anda cairkan. Oleh karena itu, penting untuk tetap aktif sebagai anggota
        dengan melakukan pembelian minimal satu produk setiap bulannya agar
        dapat mengakses dan mengambil manfaat dari rewards yang Anda peroleh.
      </Text>
    </View>
  );
};

export default RewardInfoComponent;
