/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'themes/Colors';
import ModalMemberInactive from './ModalMemberInactive';
import { getActive } from 'service/StorageUtils';

const InviteFriendComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [show, setShow] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    getActive().then(setActive);
  }, [])
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (active) {
            navigate('reward-home');
          } else {
            setShow(true);
          }
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.darkBlue,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 16,
          paddingHorizontal: 16,
          borderRadius: 16,
          marginTop: 16,
          marginHorizontal: 16,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name={'people-outline'} color={Colors.white} size={20} />
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 16,
            }}>
            Undang Teman Anda Sekarang
          </Text>
        </View>

        <Icon name={'chevron-forward-outline'} size={20} color={Colors.white} />
      </TouchableOpacity>
      <ModalMemberInactive visible={show} setVisible={setShow} />
    </>
  );
};

export default InviteFriendComponent;
