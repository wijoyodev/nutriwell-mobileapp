/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { registerDataSchema } from '../schema/registerDataSchema';
import CustomTextInput from 'components/CustomTextInput';
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomButton from 'components/CustomButton';

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
};

export type InputProfileComponentProps = {
  email: string;
  onComplete?: () => void;
};
const InputProfileComponent: React.FC<InputProfileComponentProps> = ({
  email,
  onComplete,
}) => {
  const formInitialValues: ProfileForm = {
    name: '',
    email,
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
      <View>
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

      <CustomButton
        backgroundColor={Colors.blue}
        text={'SIMPAN'}
        onPress={handleFormSubmit(handleSave)}
      />
    </View>
  );
};

export default InputProfileComponent;
