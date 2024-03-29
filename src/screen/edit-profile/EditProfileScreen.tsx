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
import updateProfile from 'network/auth/update-profile';

const EditProfileScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute();

  let formInitialValues: ProfileForm = {
    name: '',
    email: '',
    birthDate: new Date(),
    phoneNumber: '',
    gender: 'male',
    imageUrl: '',
  };

  let code = '+62';
  if (params.data) {
    const phoneNumberSplitted = params.data.phoneNumber.split(' ');
    const phoneNumber = phoneNumberSplitted[1];
    code = phoneNumberSplitted[0].replace('(', '').replace(')', '');
    formInitialValues = {
      ...params.data,
      phoneNumber,
    };
  }

  const formMethods = useForm({
    resolver: yupResolver(registerDataSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const { handleSubmit: handleFormSubmit } = formMethods;

  const handleSave: SubmitHandler<ProfileForm> = (data: ProfileForm) => {
    console.log(data);
    updateProfile(data).then(response => {
      if (response.success) {
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
