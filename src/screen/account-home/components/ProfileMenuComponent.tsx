/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import ProfileMenuItemComponent from './ProfileMenuItemComponent';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { PROFILE_SCREEN } from 'navigation/constants';

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
          onPress: () => {},
        },
        {
          iconName: 'user',
          label: 'Informasi Upline',
          onPress: () => {},
        },
      ],
    },
    {
      name: 'GENERAL',
      list: [
        {
          iconName: 'user',
          label: 'Ubah PIN',
          onPress: () => {},
        },
        {
          iconName: 'user',
          label: 'Syarat & Ketentuan',
          onPress: () => {},
        },
        {
          iconName: 'user',
          label: 'Keluar',
          onPress: () => {},
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
    </View>
  );
};

export default ProfileMenuComponent;
