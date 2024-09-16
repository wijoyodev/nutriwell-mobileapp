/* eslint-disable react-native/no-inline-styles */
import CustomDatePicker from 'components/CustomDatePicker';
import CustomRadioButton from 'components/CustomRadioButton';
import CustomTextInput from 'components/CustomTextInput';
import React, { useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CustomPhoneInput from 'components/CustomPhoneInput';
import Utils from 'service/Utils';
import CustomProfileImage from 'components/CustomProfileImage';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';
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

export type EditProfileComponentProps = {
  countryCode: string;
  onDelete: () => void;
};

const EditProfileComponent: React.FC<EditProfileComponentProps> = ({
  countryCode,
  onDelete,
}) => {
  const modalRef = useRef<CustomModalHandle | null>();

  const [code, setCode] = useState(countryCode);
  const [loadingVisible, setLoadingVisible] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const imageUrl = watch('imageUrl');
  const image = watch('image');
  const active = watch('active');

  console.log('Active: ', active)
  const handleUpdateImage = () => {
    Utils.openGallery(handleUploadImage);
  };

  const handleUploadImage = (attachment: any) => {
    setValue('image', attachment);
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
        <CustomProfileImage size={80} imageUrl={imageUrl} image={image} />
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
        Status
      </Text>
      <Controller
        name={'active'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomTextInput
            value={
              value === null || value === undefined
                ? '-'
                : value
                ? 'Aktif'
                : 'Tidak Aktif'
            }
            onChangeText={onChange}
            disabled={true}
          />
        )}
      />
      {/* <Text style={{ marginTop: 16, marginBottom: 6, color: Colors.black }}>
        Tanggal Lahir
      </Text>
      <Controller
        name={'birthDate'}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomDatePicker value={value} onChangeValue={onChange} />
        )}
      /> */}

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
      <Text
        onPress={() => modalRef.current?.openModal()}
        style={{
          color: Colors.red,
          fontWeight: '500',
          textAlign: 'center',
          marginTop: 8,
        }}>
        Hapus akun
      </Text>

      <CustomModal ref={el => (modalRef.current = el)}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 24,
            borderRadius: 16,
          }}>
          <View style={{ marginBottom: 24, alignItems: 'center' }}>
            <MaterialIcon name={'info'} color={Colors.orangeIcon} size={70} />
          </View>

          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              textAlign: 'center',
              marginBottom: 32,
            }}>
            Anda yakin ingin menghapus akun?
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <CustomButton
              containerStyle={{
                flex: 1,
              }}
              textStyle={{
                color: Colors.blue,
              }}
              onPress={() => {
                onDelete();
                modalRef.current?.closeModal();
              }}
              text={'YA'}
              backgroundColor={Colors.white}
            />
            <CustomButton
              containerStyle={{
                flex: 1,
              }}
              onPress={() => modalRef.current?.closeModal()}
              text={'TIDAK'}
              backgroundColor={Colors.blue}
            />
          </View>
        </View>
      </CustomModal>

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
