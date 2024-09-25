/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextInput from 'components/CustomTextInput';
import React, { useEffect, useRef, useState } from 'react';
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
  RouteProp,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';
import { LOGIN_SCREEN } from 'navigation/constants';
import verificationEmail from 'network/auth/verification-email';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

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
  const [loading, setLoading] = useState(false);
  const { params } = useRoute<RouteProp<ParamListBase>>();

  const snackbarRef = useRef<CustomSnackbarHandle | null>();

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  useEffect(() => {
    if (params?.isExpired) {
      snackbarRef?.current?.showSnackbarError(
        'Verification has been expired. Please try again.',
      );
    }
  }, [params]);

  let formInitialValues: RegisterForm = {
    email: '',
    referralCode: '',
  };

  if (params?.code) {
    formInitialValues = {
      email: '',
      referralCode: params?.code,
    };
  }

  const formMethods = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = formMethods;

  const handleRegister: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
    console.log(data);
    setLoading(true);
    verificationEmail({
      email: data.email,
      referrer_code: data.referralCode ?? '',
    })
      .then(response => {
        setLoading(false);
        console.log('Response verification email: ', response);
        if (response.result?.status) {
          snackbarRef.current?.showSnackbarSuccess('Email berhasil dikirim.');
        } else if (response.message) {
          snackbarRef.current?.showSnackbarError(response.message);
        } else {
          snackbarRef.current?.showSnackbarUnknownError();
        }
      })
      .catch(err => {
        console.log('Error verification email: ', err);
        setLoading(false);
        snackbarRef.current?.showSnackbarUnknownError();
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
              error={errors?.email?.message ?? ''}
            />
          )}
        />

        <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
          Kode Referensi
        </Text>
        <Controller
          name={'referralCode'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              value={value}
              onChangeText={onChange}
              placeholder={'Masukkan kode referensi'}
              error={errors?.referralCode?.message ?? ''}
            />
          )}
        />

        <CustomButton
          disabled={loading}
          loading={loading}
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

      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </View>
  );
};

export default RegisterScreen;
