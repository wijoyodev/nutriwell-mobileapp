/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from 'components/CustomButton';
import CustomTextInput from 'components/CustomTextInput';
import React, { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { LoginForm } from 'screen/login/LoginScreen';
import { loginFormSchema } from 'screen/login/schema/loginFormSchema';
import Colors from 'themes/Colors';
import ModalCheckEmail, {
  ModalCheckEmailHandle,
} from './components/ModalCheckEmail';

const ForgetPinScreen = () => {
  const modalRef = useRef<ModalCheckEmailHandle | null>();

  const formInitialValues: LoginForm = {
    email: '',
  };

  const formMethods = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    // formState: { errors },
  } = formMethods;

  const submit: SubmitHandler<LoginForm> = (data: LoginForm) => {
    console.log(data);
    modalRef?.current?.openModal();
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: Colors.white,
      }}>
      <ModalCheckEmail ref={el => (modalRef.current = el)} />
      <Text
        style={{
          fontSize: 16,
          color: Colors.black,
          fontWeight: 'bold',
        }}>
        Masukkan email Anda
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          marginTop: 8,
        }}>
        Kami akan mengirimkan instruksi ke email yang Anda gunakan untuk
        mendaftarkan akun.
      </Text>

      <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
        Email
      </Text>
      <Controller
        name={'email'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            value={value}
            onChangeText={onChange}
            placeholder={'Masukkan email Anda'}
          />
        )}
      />

      <CustomButton
        onPress={handleFormSubmit(submit)}
        containerStyle={{ marginTop: 32 }}
        backgroundColor={Colors.blue}
        text={'SUBMIT'}
      />
    </View>
  );
};

export default ForgetPinScreen;
