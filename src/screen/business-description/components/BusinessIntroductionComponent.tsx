/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const BusinessIntroductionComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
        Mengenal aplikasi Garam Garena lebih dalam yuk!
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Pada tahun 2018, kami memulai tekad untuk mendorong gaya hidup lebih
        sehat dari hal yang paling dasar. Menurut survei tahun 2023, penyebab
        kematian tertinggi di Indonesia adalah Hipertensi, yang menyebabkan
        34,1% penduduk meninggal karena penyakit ini. Sebagian besar masyarakat
        sudah mulai menyadari masalah ini, namun ada juga yang belum dan
        menyebabkan komplikasi yang lebih serius. Salah satu akar masalahnya
        adalah konsumsi garam, yang merupakan bagian dari diet sehari-hari kita.
        Dari sinilah Garena hadir, sebagai garam rendah natrium yang tidak hanya
        dapat mencegah tetapi juga membantu orang-orang dengan riwayat
        Hipertensi. Dengan kandungan natrium 40% lebih rendah dibandingkan garam
        meja biasa namun tetap memiliki rasa yang sama, Garena membuat
        perjalanan menuju hidup sehat menjadi lebih mudah dan menyenangkan.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Selain membantu masyarakat hidup lebih sehat, kami juga ingin mengajak
        Anda untuk memperkenalkan gaya hidup sehat ini kepada keluarga dan
        teman-teman Anda. Melalui aplikasi Garam Garena, Anda tidak hanya
        memberikan manfaat Garena kepada mereka, tetapi juga mendukung kebutuhan
        sosial dengan memberikan kesempatan untuk memulai bisnis sampingan
        melalui komisi rewards yang kami tawarkan.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Dengan setiap pembelian minimal satu produk Garena, Anda bisa menjadi
        anggota dan memulai perjalanan menuju hidup sehat. Kami berharap bahwa
        dengan menggunakan Garena, Anda dapat merasakan manfaat langsung dari
        produk ini serta mengajak orang-orang terdekat untuk ikut serta dalam
        pola hidup sehat ini. Ajakan Anda juga akan didukung oleh keuntungan
        komisi rewards yang bisa Anda dapatkan dengan mengajak mereka
        menggunakan kode referral Anda saat registrasi untuk menjadi bagian dari
        Garam Garena.
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          textAlign: 'justify',
          marginTop: 16,
        }}>
        Kami berkomitmen untuk tidak hanya menyediakan produk berkualitas untuk
        kesehatan Anda, tetapi juga menjadi bagian dari perubahan positif dalam
        gaya hidup masyarakat luas menuju pola hidup yang lebih baik dan lebih
        sehat.
      </Text>
    </View>
  );
};

export default BusinessIntroductionComponent;
