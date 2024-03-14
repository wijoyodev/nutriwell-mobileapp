/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextInput from 'components/CustomTextInput';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Image, LayoutChangeEvent, StatusBar, Text, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';
import { loginFormSchema } from './schema/loginFormSchema';
import CustomButton from 'components/CustomButton';
import { NavigationProp, ParamListBase, useFocusEffect } from '@react-navigation/native';
import { PIN_LOGIN_SCREEN, REGISTER_SCREEN } from 'navigation/constants';

export type LoginForm = {
  email: string;
};

export type LoginScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation: { navigate },
}) => {
  const [heightView, setHeightView] = useState(0);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

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
    formState: { errors },
  } = formMethods;

  const handleLogin: SubmitHandler<LoginForm> = (data: LoginForm) => {
    console.log(data);
    navigate(PIN_LOGIN_SCREEN, {
      ...data,
    });
  };

  const handleRegister = () => {
    navigate(REGISTER_SCREEN);
  };

  const { width } = useWindowDimensions();

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeightView(height);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <View style={{ flex: 1 }} onLayout={onLayout}>
        <Image
          source={require('../../assets/images/background_login.png')}
          style={{
            height: heightView,
            width: width,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginTop: -20,
          paddingHorizontal: 16,
          paddingVertical: 24,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: Colors.black }}>
          Selamat Datang kembali di Garam Garena
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black, marginTop: 8 }}>
          Masukkan email Anda untuk dapat melanjutkan masuk ke dalam akun Anda.
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
              error={errors?.email?.message ?? ''}
            />
          )}
        />

        <CustomButton
          onPress={handleFormSubmit(handleLogin)}
          backgroundColor={Colors.blue}
          text={'MASUK'}
          containerStyle={{ marginBottom: 16, marginTop: 40 }}
        />
        <Text
          style={{
            textAlign: 'center',
            color: Colors.black,
          }}>
          Belum punya akun?{' '}
          <Text
            style={{ color: Colors.blue, fontWeight: 'bold' }}
            onPress={handleRegister}>
            Daftar Sekarang
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
