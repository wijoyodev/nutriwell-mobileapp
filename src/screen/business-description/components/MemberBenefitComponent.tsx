/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';

const MemberBenefitComponent = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
        Keuntungan yang didapatkan dengan menjadi member dari Garam Garena
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Dengan membagikan kode referral Anda yang bisa ditemukan di bagian
        "Undang Teman" dan "Reward" kepada keluarga atau teman Anda, mereka
        dapat menggunakan kode tersebut saat mendaftar untuk menjadi bagian dari
        jaringan referensi Anda sebagai downline. Setiap kali downline Anda
        melakukan pembelian produk Garena minimal satu kali dalam satu bulan,
        Anda akan mendapatkan rewards secara otomatis.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Komisi yang Anda terima bervariasi tergantung dari level downline yang
        melakukan transaksi. Jika pembelian dilakukan oleh downline Level 1
        Anda, Anda akan mendapatkan komisi sebesar 9% dari harga barang sebelum
        PPN. Sedangkan jika transaksi dilakukan oleh downline Level 2 Anda,
        komisi yang Anda dapatkan adalah 7% dari harga barang sebelum PPN, dan
        seterusnya. Berikut ini adalah tabel untuk persentase komisi dari
        transaksi downline Anda dari berbagai level:
      </Text>

      <Image
        style={{
          marginTop: 16,
          width: width - 32,
          height: height / 3.5,
        }}
        resizeMethod={'auto'}
        resizeMode={'contain'}
        source={require('../../../assets/images/level-komisi.png')}
      />

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        *Harga untuk 1 produk Garena sebesar Rp. 18.018 sebelum PPN dan Rp.
        20.000 sesudah PPN (11%).
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Komisi yang Anda dapatkan akan dikenakan potongan Pajak Penghasilan
        (PPh) 21. Berikut adalah tabel yang menjabarkan persentase potongan PPh
        21 dari jumlah komisi yang Anda terima:
      </Text>

      <Image
        style={{
          marginTop: 16,
          width: width - 32,
          height: height / 3.5,
        }}
        resizeMethod={'auto'}
        resizeMode={'contain'}
        source={require('../../../assets/images/income-pph.png')}
      />
    </View>
  );
};

export default MemberBenefitComponent;
