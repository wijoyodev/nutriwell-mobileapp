/* eslint-disable react-native/no-inline-styles */
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomTextInput from 'components/CustomTextInput';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  ActivityIndicator,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPhoneInput from 'components/CustomPhoneInput';
import Utils from 'service/Utils';
import uploadImage from 'network/auth/upload-image';
import { imageUrlTes } from 'mock-api/constant';
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

const EditProfileComponent = () => {
  const [code, setCode] = useState('+62');
  const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const imageUrl = watch('imageUrl');

  const handleUpdateImage = () => {
    Utils.openGallery(handleUploadImage);
  };

  const handleUploadImage = (attachment: any) => {
    setValue('imageUrl', imageUrlTes);
    // setLoadingVisible(true);
    // uploadImage(attachment)
    //   .then(response => {
    //     console.log('Response: ', response);
    //     setLoadingVisible(false);
    //     if (response.data.imageUrl !== undefined) {
    //       setValue('imageUrl', response.imageUrl);
    //     }
    //   })
    //   .catch(err => {
    //     setLoadingVisible(false);
    //     console.log(err);
    //   });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, paddingHorizontal: 16 }}>
      <TouchableOpacity
        onPress={handleUpdateImage}
        style={{
          position: 'relative',
          width: 80,
          borderRadius: 40,
          marginTop: 16,
        }}>
        <CustomProfileImage size={80} imageUrl={imageUrl} />
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
            error={errors?.name?.message ?? ''}
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

      <Modal transparent={true} visible={loadingVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default EditProfileComponent;
