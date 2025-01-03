/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, Pressable } from 'react-native';

export type CustomModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

export type CustomModalProps = {
  isPicker?: boolean;
  animationType?: 'none' | 'fade' | 'slide';
  children: React.ReactNode;
  onDismiss?: () => void;
  disableCloseOutside?: boolean;
  disableCloseBack?: boolean;
};

const CustomModal = forwardRef<CustomModalHandle, CustomModalProps>(
  (
    {
      children,
      isPicker,
      animationType,
      onDismiss,
      disableCloseOutside,
      disableCloseBack,
    },
    ref,
  ) => {
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
      <Modal
        animationType={animationType ?? 'fade'}
        visible={visible}
        onRequestClose={() => {
          if (!disableCloseBack) {
            onDismiss?.();
            closeModal();
          }
        }}
        onDismiss={onDismiss}
        transparent={true}>
        <Pressable
          onPress={() => {
            if (!disableCloseOutside) {
              onDismiss?.();
              closeModal();
            }
          }}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            ...(!isPicker
              ? {
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 24,
                }
              : {
                  justifyContent: 'flex-end',
                }),
          }}>
          {children}
        </Pressable>
      </Modal>
    );
  },
);

export default CustomModal;
