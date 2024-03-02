/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { RESET_PIN_SCREEN } from 'navigation/constants';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export type ModalCheckEmailHandle = {
  openModal: () => void;
};

export type ModalCheckEmailProps = {};

const ModalCheckEmail = forwardRef<ModalCheckEmailHandle, ModalCheckEmailProps>(
  (_, ref) => {
    useImperativeHandle(ref, () => ({
      openModal() {
        setVisible(true);
      },
    }));

    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const [visible, setVisible] = useState(false);

    const closeModal = () => {
      setVisible(false);
    };

    const openEmail = () => {
      navigate(RESET_PIN_SCREEN);
    };

    return (
      <Modal visible={visible} onRequestClose={closeModal} transparent={true}>
        <Pressable
          onPress={closeModal}
          style={{
            flex: 1,
            // backgroundColor: Colors.white,
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 12,
              padding: 24,
            }}>
            <View style={{ alignItems: 'center', marginBottom: 24 }}>
              <View
                style={{
                  backgroundColor: Colors.orangeIcon,
                  padding: 12,
                  borderRadius: 32,
                }}>
                <Icon name={'mail-outline'} color={Colors.white} size={32} />
              </View>
            </View>
            <Text
              style={{
                fontSize: 16,
                color: Colors.black,
                fontWeight: 'bold',
                marginBottom: 8,
                textAlign: 'center',
              }}>
              Cek Email Anda
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Colors.black,
                textAlign: 'center',
                marginBottom: 40,
              }}>
              Instruksi selanjutnya sudah dikirimkan ke email Anda. Silakan
              ikuti petunjuk untuk mengatur ulang PIN Anda.
            </Text>

            <CustomButton
              onPress={openEmail}
              backgroundColor={Colors.blue}
              text={'BUKA EMAIL'}
            />
          </View>
        </Pressable>
      </Modal>
    );
  },
);

export default ModalCheckEmail;
