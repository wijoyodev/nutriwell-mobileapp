/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Image, ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { registerDataSchema } from '../schema/registerDataSchema';
import CustomTextInput from 'components/CustomTextInput';
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomButton from 'components/CustomButton';
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

export type ProfileForm = {
  email: string;
  name: string;
  birthDate: Date;
  gender: string;
  phoneNumber: string;
};

export type InputProfileComponentProps = {
  email: string;
  onComplete?: () => void;
};
const InputProfileComponent: React.FC<InputProfileComponentProps> = ({
  email,
  onComplete,
}) => {
  const [code, setCode] = useState('+62');

  const formInitialValues: ProfileForm = {
    name: '',
    email,
    birthDate: new Date(),
    gender: 'male',
    phoneNumber: '',
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
  } = formMethods;

  const handleSave: SubmitHandler<ProfileForm> = (data: ProfileForm) => {
    console.log(data);
    onComplete?.();
  };

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

        <View
          style={{
            position: 'relative',
            width: 80,
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
        <Controller
          name={'phoneNumber'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomPhoneInput
              code={code}
              onChangeCode={setCode}
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
