/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from 'themes/Colors';

export type ProfileMenuItemProps = {
  iconName: string;
  label: string;
  onPress: () => void;
};

const ProfileMenuItemComponent: React.FC<ProfileMenuItemProps> = ({
  iconName,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 12,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Icon name={iconName} color={Colors.black} />
        <Text style={{ color: Colors.black, fontSize: 14 }}>{label}</Text>
      </View>
      <Icon name={'angle-right'} color={Colors.black} size={10} />
    </TouchableOpacity>
  );
};

export default ProfileMenuItemComponent;
