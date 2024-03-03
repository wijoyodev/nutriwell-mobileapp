/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomTextInput from 'components/CustomTextInput';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, ScrollView, Text, View } from 'react-native';
import { ProfileForm } from 'screen/register-data/components/InputProfileComponent';
import { registerDataSchema } from 'screen/register-data/schema/registerDataSchema';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomPhoneInput from 'components/CustomPhoneInput';

const genderList = [
  {
    label: 'Laki-laki',
    value: 'male',
  },
  {
    label: 'Perempuan',
    value: 'female',
  },
];

const EditProfileComponent = () => {
  const formInitialValues: ProfileForm = {
    name: '',
    email: '',
    birthDate: new Date(),
    gender: 'male',
  };

  const formMethods = useForm({
    resolver: yupResolver(registerDataSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    // formState: { errors },
  } = formMethods;

  // const handleSave: SubmitHandler<ProfileForm> = (data: ProfileForm) => {
  //   console.log(data);
  //   onComplete?.();
  // };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, paddingHorizontal: 16 }}>
      <View
        style={{
          position: 'relative',
          width: 80,
          marginTop: 16,
        }}>
        <Image
          source={require('../../../assets/images/product_image.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
          }}
        />
        <View
          style={{
            backgroundColor: Colors.grey,
            padding: 4,
            position: 'absolute',
            bottom: 0,
            right: 4,
            borderRadius: 8,
          }}>
          <Icon name={'camera'} style={{}} />
        </View>
      </View>
      <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
        Nama
      </Text>
      <Controller
        name={'name'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            value={value}
            onChangeText={onChange}
            placeholder={'Masukkan nama lengkap'}
          />
        )}
      />

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
            disabled={true}
          />
        )}
      />

      <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
        Nomor Telepon
      </Text>
      <CustomPhoneInput placeholder={'cth: 812 9999 0000'} />

      <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
        Tanggal Lahir
      </Text>
      <Controller
        name={'birthDate'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomDatePicker value={value} onChangeValue={onChange} />
        )}
      />

      <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
        Jenis Kelamin
      </Text>
      <Controller
        name={'gender'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomRadioButton
            value={value}
            data={genderList}
            onChange={onChange}
          />
        )}
      />
    </ScrollView>
  );
};

export default EditProfileComponent;
