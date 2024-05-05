/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { CHECK_OUT_PAYMENT_SCREEN, HOME_SCREEN } from 'navigation/constants';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

export type ModalOrderCreatedHandle = {
  openModal: (invoiceUrl: string) => void;
};

const ModalOrderCreated = forwardRef<ModalOrderCreatedHandle, {}>((_, ref) => {
  useImperativeHandle(ref, () => ({
    openModal(invoice: string) {
      setVisible(true);
      setInvoiceUrl(invoice);
    },
    closeModal() {
      setVisible(false);
    },
  }));
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [visible, setVisible] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState('');

  const closeModal = () => {
    setVisible(false);
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
            padding: 24,
            borderRadius: 16,
          }}>
          <View
            style={{
              marginBottom: 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={'checkcircle'} size={70} color={Colors.orangeIcon} />
          </View>
          <Text
            style={{
              color: Colors.black,
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Kami menerima pesanan Anda
          </Text>

          <Text
            style={{
              color: Colors.black,
              fontSize: 14,
              marginTop: 12,
              marginBottom: 40,
              textAlign: 'center',
            }}>
            Terima kasih sudah memesan. Pesanan Anda akan segera diproses.
          </Text>

          <CustomButton
            onPress={() => {
              closeModal();
              navigate(CHECK_OUT_PAYMENT_SCREEN, {
                invoice_url: invoiceUrl,
              });
            }}
            backgroundColor={Colors.blue}
            text={'LANJUT'}
          />
        </View>
      </Pressable>
    </Modal>
  );
});

export default ModalOrderCreated;
