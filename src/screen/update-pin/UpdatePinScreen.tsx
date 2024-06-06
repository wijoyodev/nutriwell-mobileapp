/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import Colors from 'themes/Colors';
import CustomPin from 'components/CustomPin';
import CustomButton from 'components/CustomButton';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';
import Icon from 'react-native-vector-icons/AntDesign';
import updateProfile from 'network/auth/update-profile';
import CustomSnackbar, { CustomSnackbarHandle } from 'components/CustomSnackbar';

const UpdatePinSreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const [progress, setProgress] = useState(1);
  const [oldPin, setOldPin] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const snackbarRef = useRef<CustomSnackbarHandle | null>();
  const modalRef = useRef<CustomModalHandle | null>();

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  useEffect(() => {
    navigation.setOptions({
      headerLeft,
    });
  }, [progress]);

  const headerLeft = (props: any) => (
    <HeaderBackButton {...props} onPress={onBack} />
  );

  const onBack = () => {
    console.log('progress', progress);
    if (progress === 3) {
      setProgress(progress - 1);
      setPin('');
      setConfirmPin('');
      return;
    } else if (progress === 2) {
      setProgress(progress - 1);
      setOldPin('');
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    if (oldPin.length === 6) {
      setProgress(progress + 1);
    }
  }, [oldPin]);

  useEffect(() => {
    if (pin.length === 6) {
      setProgress(progress + 1);
    }
  }, [pin]);

  useEffect(() => {
    if (progress === 3 && confirmPin.length === 6) {
      if (pin === confirmPin) {
        updateProfile({
          old_password: oldPin,
          password: pin,
          confirm_password: confirmPin,
        }).then(response => {
          console.log('Response change PIN: ', response);
          if (response.result) {
            modalRef.current?.openModal();
          } else {
            snackbarRef.current?.showSnackbarError('PIN lama tidak sesuai');
            setProgress(1);
            setOldPin('');
            setPin('');
            setConfirmPin('');
          }
        });
      } else {
        // error tidak sesuai
      }
    } else {
      // reset error
    }
  }, [confirmPin]);

  const getText = () => {
    switch (progress) {
      case 1:
        return 'Masukkan PIN lama Anda untuk dapat mengubah PIN.';
      case 2:
        return 'Masukkan PIN baru Anda.';
      case 3:
        return 'Konfirmasi ulang PIN baru Anda.';
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, padding: 16 }}>
      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 32,
        }}>
        {getText()}
      </Text>
      {progress === 1 && <CustomPin value={oldPin} onChangeValue={setOldPin} />}
      {progress === 2 && <CustomPin value={pin} onChangeValue={setPin} />}
      {progress === 3 && (
        <CustomPin value={confirmPin} onChangeValue={setConfirmPin} />
      )}

      <CustomModal ref={el => (modalRef.current = el)}>
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
              fontSize: 16,
              color: Colors.black,
              textAlign: 'center',
              marginBottom: 32,
              fontWeight: 'bold',
            }}>
            Berhasil mengubah PIN Anda
          </Text>
          <CustomButton
            onPress={() => {
              modalRef.current?.closeModal();
              navigation.goBack();
            }}
            text={'TUTUP'}
            backgroundColor={Colors.blue}
          />
        </View>
      </CustomModal>
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </View>
  );
};

export default UpdatePinSreen;
