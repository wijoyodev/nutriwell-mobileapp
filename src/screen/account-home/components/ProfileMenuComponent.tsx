/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import ProfileMenuItemComponent from './ProfileMenuItemComponent';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { LOGIN_SCREEN, ORDER_HISTORY_SCREEN, PROFILE_SCREEN, TERMS_AND_CONDITION_SCREEN, UPDATE_PIN_SCREEN, UPLINE_INFORMATION_SCREEN } from 'navigation/constants';
import CustomButton from 'components/CustomButton';
import Colors from 'themes/Colors';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';

export type Menu = {
  name: string;
  list: MenuItem[];
};

type MenuItem = {
  iconName: string;
  label: string;
  onPress: () => void;
};

const ProfileMenuComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const modalRef = useRef<CustomModalHandle | null>();
  const menuList: Menu[] = [
    {
      name: 'AKUN SAYA',
      list: [
        {
          iconName: 'user',
          label: 'Profil Saya',
          onPress: () => navigate(PROFILE_SCREEN),
        },
        {
          iconName: 'user',
          label: 'Histori Pesanan',
          onPress: () => navigate(ORDER_HISTORY_SCREEN),
        },
        {
          iconName: 'user',
          label: 'Informasi Upline',
          onPress: () => navigate(UPLINE_INFORMATION_SCREEN),
        },
      ],
    },
    {
      name: 'GENERAL',
      list: [
        {
          iconName: 'user',
          label: 'Ubah PIN',
          onPress: () => navigate(UPDATE_PIN_SCREEN),
        },
        {
          iconName: 'user',
          label: 'Syarat & Ketentuan',
          onPress: () => navigate(TERMS_AND_CONDITION_SCREEN),
        },
        {
          iconName: 'user',
          label: 'Keluar',
          onPress: () => modalRef.current?.openModal(),
        },
      ],
    },
  ];

  const renderItem = (info: ListRenderItemInfo<Menu>) => {
    return (
      <View
        style={{
          marginTop: 16,
        }}>
        <Text style={{ fontSize: 12 }}>{info.item.name}</Text>
        <FlatList data={info.item.list} renderItem={renderMenuItem} />
      </View>
    );
  };

  const renderMenuItem = (info: ListRenderItemInfo<MenuItem>) => {
    return <ProfileMenuItemComponent {...info.item} />;
  };

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <FlatList data={menuList} renderItem={renderItem} />
      <CustomModal ref={el => (modalRef.current = el)}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 24,
            borderRadius: 16,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              textAlign: 'center',
              marginBottom: 12,
              fontWeight: 'bold',
            }}>
            Keluar Akun
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              textAlign: 'center',
              marginBottom: 40,
            }}>
            Apakah Anda yakin ingin keluar dari akun Anda?
          </Text>
          <CustomButton
            onPress={() => {
              modalRef.current?.closeModal();
            }}
            text={'TUTUP'}
            backgroundColor={Colors.blue}
          />
          <CustomButton
            onPress={() => {
              modalRef.current?.closeModal();
              navigate(LOGIN_SCREEN);
            }}
            text={'KELUAR AKUN'}
            textStyle={{
              color: Colors.blue,
            }}
            containerStyle={{
              marginTop: 16,
              borderColor: Colors.blue,
              borderWidth: 1,
            }}
            backgroundColor={Colors.white}
          />
        </View>
      </CustomModal>
    </View>
  );
};

export default ProfileMenuComponent;
