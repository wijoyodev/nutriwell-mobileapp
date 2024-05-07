/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { View } from 'react-native';
import Colors from 'themes/Colors';
import EditProfileComponent from './components/EditProfileComponent';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerDataSchema } from 'screen/register-data/schema/registerDataSchema';
import { ProfileForm } from 'screen/register-data/components/InputProfileComponent';
import updateProfile, { ProfileRequest, ProfileResponse } from 'network/auth/update-profile';
import {
  getUserId,
  setAvatar,
  setBirthDate,
  setEmail,
  setFullName,
  setGender,
  setPhoneCountryCode,
  setPhoneNumber,
} from 'service/StorageUtils';

const EditProfileScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute();

  let formInitialValues: ProfileForm = {
    name: '',
    email: '',
    birthDate: new Date(),
    phoneNumber: '',
    gender: 'male',
    image: null,
    code: '+62',
    country: 'ID',
  };

  let code = '+62';
  if (params?.data) {
    const phoneNumber = params?.data.phoneNumber.slice(1);
    formInitialValues = { ...params?.data, phoneNumber };
  }

  const formMethods = useForm({
    resolver: yupResolver(registerDataSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = formMethods;

  const handleSave: SubmitHandler<ProfileForm> = async (data: ProfileForm) => {
    console.log(data);
    const request: ProfileRequest = {
      full_name: data.name,
      email: data.email,
      date_of_birth: data.birthDate.toISOString(),
      gender: data.gender,
      phone_number: data.phoneNumber,
      phone_number_country: data.code,
    };
    if (data.image) {
      request.avatar = data.image;
    }
    updateProfile(request).then(async response => {
      if (response.result) {
        await saveData(response.result);
        goBack();
      } else {
        console.log('FAILED');
      }
    });
  };

  const saveData = async (response: ProfileResponse) => {
    if (response.updated_data.full_name) {
      await setFullName(response.updated_data.full_name);
    }

    if (response.updated_data.email) {
      await setEmail(response.updated_data.email);
    }

    if (response.updated_data.date_of_birth) {
      await setBirthDate(response.updated_data.date_of_birth);
    }

    if (response.updated_data.gender) {
      await setGender(response.updated_data.gender);
    }

    if (response.updated_data.phone_number) {
      await setPhoneNumber(response.updated_data.phone_number);
    }

    if (response.updated_data.phone_number_country) {
      await setPhoneCountryCode(response.updated_data.phone_number_country);
    }

    if (response.updated_data.avatar_url) {
      await setAvatar(response.updated_data.avatar_url);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <FormProvider {...formMethods}>
        <EditProfileComponent countryCode={code} />
      </FormProvider>
      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <CustomButton
          onPress={handleFormSubmit(handleSave)}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
