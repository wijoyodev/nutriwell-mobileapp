/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextInput from 'components/CustomTextInput';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Image,
  LayoutChangeEvent,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Colors from 'themes/Colors';
import { registerFormSchema } from './schema/registerFormSchema';
import CustomButton from 'components/CustomButton';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import { LOGIN_SCREEN, REGISTER_DATA_SCREEN } from 'navigation/constants';
import verificationEmail from 'network/auth/verification-email';

type RegisterForm = {
  email: string;
  referralCode?: string;
};

export type RegisterScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation: { navigate },
}) => {
  const [heightView, setHeightView] = useState(0);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const formInitialValues: RegisterForm = {
    email: '',
    referralCode: '',
  };

  const formMethods = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    // formState: { errors },
  } = formMethods;

  const handleRegister: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
    console.log(data);
    verificationEmail({
      email: data.email,
      referrer_code: data.referralCode ?? '',
    }).then(response => {
      if (response.result) {
        navigate(REGISTER_DATA_SCREEN, data);
      } else {
        console.log('Error');
        // TODO: show snackbar
      }
    });
  };

  const handleLogin = () => {
    navigate(LOGIN_SCREEN);
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
          Selamat Datang di Garam Garena
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black, marginTop: 8 }}>
          Daftarkan diri Anda sekarang juga dan dapatkan keuntungan
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

        <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
          Kode Referensi (Opsional)
        </Text>
        <Controller
          name={'referralCode'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder={'Masukkan kode referensi'}
            />
          )}
        />

        <CustomButton
          onPress={handleFormSubmit(handleRegister)}
          backgroundColor={Colors.blue}
          text={'VERIFIKASI EMAIL'}
          containerStyle={{ marginBottom: 16, marginTop: 40 }}
        />
        <Text
          style={{
            textAlign: 'center',
            color: Colors.black,
          }}>
          Sudah punya akun?{' '}
          <Text
            style={{ color: Colors.blue, fontWeight: 'bold' }}
            onPress={handleLogin}>
            Masuk Sekarang
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
