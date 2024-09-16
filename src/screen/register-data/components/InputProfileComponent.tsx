/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import { registerDataSchema } from '../schema/registerDataSchema';
import CustomTextInput from 'components/CustomTextInput';
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomButton from 'components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPhoneInput from 'components/CustomPhoneInput';
import Utils from 'service/Utils';
import CustomProfileImage from 'components/CustomProfileImage';

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

export type ProfileForm = {
  email: string;
  name: string;
  birthDate: Date;
  gender: string;
  phoneNumber: string;
  image?: any;
  code: string;
  country: string;
  imageUrl?: string;
  active?: boolean | null;
};

export type InputProfileComponentProps = {
  email: string;
  onComplete?: (data: ProfileForm) => void;
  loading: boolean;
};
const InputProfileComponent: React.FC<InputProfileComponentProps> = ({
  email,
  onComplete,
  loading,
}) => {
  const formInitialValues: ProfileForm = {
    name: '',
    email,
    birthDate: new Date(),
    gender: 'male',
    phoneNumber: '',
    image: null,
    code: '+62',
    country: 'ID',
  };

  const formMethods = useForm({
    resolver: yupResolver(registerDataSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    watch,
    setValue,
  } = formMethods;

  const image = watch('image');

  const handleSave: SubmitHandler<ProfileForm> = (data: ProfileForm) => {
    console.log(data);
    onComplete?.(data);
  };

  const handleUpdateImage = () => {
    Utils.openGallery(handleUploadImage);
  };

  const handleUploadImage = (attachment: any) => {
    setValue('image', attachment);
  };

  const code = watch('code');

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text
          style={{
            marginTop: 16,
            marginBottom: 6,
            color: Colors.black,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {'Silakan lengkapi data diri Anda'}
        </Text>

        <TouchableOpacity
          onPress={handleUpdateImage}
          style={{
            position: 'relative',
            width: 80,
            borderRadius: 40,
            marginTop: 16,
          }}>
          <CustomProfileImage size={80} image={image} />
          <View
            style={{
              backgroundColor: Colors.grey,
              padding: 4,
              position: 'absolute',
              bottom: 0,
              right: 4,
              borderRadius: 8,
            }}>
            <Icon name={'camera-outline'} color={Colors.blue} />
          </View>
        </TouchableOpacity>

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
        <Controller
          name={'phoneNumber'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomPhoneInput
              code={code}
              onChangeCountry={countryValue =>
                setValue('country', countryValue)
              }
              onChangeCode={codeValue => setValue('code', codeValue)}
              onChangeText={onChange}
              value={value}
              placeholder={'cth: 812 9999 0000'}
              error={errors?.phoneNumber?.message ?? ''}
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
      </ScrollView>

      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
        }}>
        <CustomButton
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
          onPress={handleFormSubmit(handleSave)}
        />
      </View>
    </View>
  );
};

export default InputProfileComponent;
