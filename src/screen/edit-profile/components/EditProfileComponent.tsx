/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomTextInput from 'components/CustomTextInput';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { ProfileForm } from 'screen/register-data/components/InputProfileComponent';
import { registerDataSchema } from 'screen/register-data/schema/registerDataSchema';
import Colors from 'themes/Colors';

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
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

export default EditProfileComponent;
