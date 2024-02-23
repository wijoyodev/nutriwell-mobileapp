/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, Pressable } from 'react-native';

export type CustomModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

export type CustomModalProps = {
  children: React.ReactNode;
};

const CustomModal = forwardRef<CustomModalHandle, CustomModalProps>(
  ({ children }, ref) => {
    useImperativeHandle(ref, () => ({
      openModal() {
        setVisible(true);
      },
      closeModal() {
        setVisible(false);
      },
    }));
    const [visible, setVisible] = useState(false);

    const closeModal = () => {
      setVisible(false);
    };
    return (
      <Modal visible={visible} onRequestClose={closeModal} transparent={true}>
        <Pressable
          onPress={closeModal}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          {children}
        </Pressable>
      </Modal>
    );
  },
);

export default CustomModal;
