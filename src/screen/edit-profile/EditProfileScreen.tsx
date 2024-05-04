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
import updateProfile, { ProfileRequest } from 'network/auth/update-profile';
import { getUserId } from 'service/StorageUtils';

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
    formInitialValues = params?.data;
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
    const userId = await getUserId();
    const request: ProfileRequest = {
      id: parseInt(userId, 10),
      full_name: data.name,
      date_of_birth: data.birthDate.toISOString(),
      gender: data.gender,
      phone_number: data.phoneNumber,
      phone_number_country: data.code,
    };
    if (data.image) {
      request.avatar = data.image;
    }
    updateProfile(request).then(response => {
      console.log('Response update: ', response);
      if (response.result) {
        goBack();
      } else {
        console.log('FAILED');
      }
    });
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
