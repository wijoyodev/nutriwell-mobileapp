/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';
import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type ModalMemberInactiveProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const ModalMemberInactive: React.FC<ModalMemberInactiveProps> = ({
  visible,
  setVisible,
}) => {
  const modalRef = useRef<CustomModalHandle | null>();

  useEffect(() => {
    if (visible) {
      modalRef.current?.openModal();
    } else {
      modalRef.current?.closeModal();
    }
  });

  return (
    <CustomModal
      onDismiss={() => setVisible(false)}
      ref={el => (modalRef.current = el)}>
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 24,
          borderRadius: 16,
        }}>
        <View style={{ marginBottom: 24, alignItems: 'center' }}>
          <MaterialIcon name={'info'} color={Colors.orangeIcon} size={70} />
        </View>

        <Text
          style={{
            fontSize: 16,
            color: Colors.black,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 12,
          }}>
          Saat ini Anda tidak aktif
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
            textAlign: 'center',
            marginBottom: 24,
          }}>
          Silakan lakukan pembelian untuk dapat mengaktifkan kembali member Anda
          dan mendapatkan komisi
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <CustomButton
            containerStyle={{
              flex: 1,
            }}
            onPress={() => {
              // onDelete();
              setVisible(false);
            }}
            text={'TUTUP'}
            backgroundColor={Colors.blue}
          />
        </View>
      </View>
    </CustomModal>
  );
};

export default ModalMemberInactive;
