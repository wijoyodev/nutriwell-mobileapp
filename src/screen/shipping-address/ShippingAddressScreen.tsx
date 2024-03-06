/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import CustomPhoneInput from 'components/CustomPhoneInput';
import CustomPicker from 'components/CustomPicker';
import CustomTextInput from 'components/CustomTextInput';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { shippingAddressSchema } from './schema/shippingAddressSchema';
import { yupResolver } from '@hookform/resolvers/yup';

type AddressOption = {
  name: string;
};

const provinceOptions: AddressOption[] = [
  {
    name: 'Jawa Barat',
  },
  {
    name: 'Jawa Tengah',
  },
  {
    name: 'Jawa Timur',
  },
];

const cityOptions: AddressOption[] = [
  {
    name: 'Bekasi Barat',
  },
  {
    name: 'Bekasi Kota',
  },
  {
    name: 'Bekasi Timur',
  },
];

const districtOptions: AddressOption[] = [
  {
    name: 'Cikarang Barat',
  },
  {
    name: 'Cikarang Kota',
  },
  {
    name: 'Cikarang Timur',
  },
];

export type ShippingAddressForm = {
  name: string;
  phoneNumber: string;
  province: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
};

const ShippingAddressScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  const [code, setCode] = useState('+62');

  const formInitialValues: ShippingAddressForm = {
    name: '',
    phoneNumber: '',
    province: '',
    city: '',
    district: '',
    streetAddress: '',
    postalCode: '',
  };

  const formMethods = useForm({
    resolver: yupResolver(shippingAddressSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = formMethods;

  const renderOption = (item: AddressOption) => (
    <Text
      style={{
        color: Colors.black,
        fontSize: 14,
        paddingVertical: 8,
      }}>
      {item.name}
    </Text>
  );

  const submit: SubmitHandler<ShippingAddressForm> = (
    data: ShippingAddressForm,
  ) => {
    console.log(data);
    goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <ScrollView
        style={{ flex: 1, padding: 16 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nama Penerima
          </Text>
          <Controller
            control={control}
            name={'name'}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder={'Masukkan nama penerima'}
                error={errors?.name?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nomor Telepon Penerima
          </Text>
          <Controller
            control={control}
            name={'phoneNumber'}
            render={({ field: { onChange, value } }) => (
              <CustomPhoneInput
                value={value}
                onChangeText={onChange}
                code={code}
                onChangeCode={setCode}
                placeholder={'cth: 812 9999 0000'}
                error={errors?.phoneNumber?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Provinsi
          </Text>

          <Controller
            control={control}
            name={'province'}
            render={({ field: { onChange, value } }) => (
              <CustomPicker
                items={provinceOptions}
                placeholder={'Pilih provinsi'}
                renderOption={renderOption}
                value={value}
                onSelect={(item: AddressOption) => onChange(item.name)}
                error={errors?.province?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Kota
          </Text>
          <Controller
            control={control}
            name={'city'}
            render={({ field: { onChange, value } }) => (
              <CustomPicker
                items={cityOptions}
                placeholder={'Pilih kota'}
                renderOption={renderOption}
                value={value}
                onSelect={(item: AddressOption) => onChange(item.name)}
                error={errors?.city?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Kecamatan
          </Text>
          <Controller
            control={control}
            name={'district'}
            render={({ field: { onChange, value } }) => (
              <CustomPicker
                items={districtOptions}
                placeholder={'Pilih kecamatan'}
                renderOption={renderOption}
                value={value}
                onSelect={(item: AddressOption) => onChange(item.name)}
                error={errors?.district?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Kode Pos
          </Text>
          <Controller
            control={control}
            name={'postalCode'}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                onChangeText={onChange}
                value={value}
                placeholder={'Masukkan kode pos'}
                error={errors?.postalCode?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Alamat Lengkap
          </Text>
          <Controller
            control={control}
            name={'streetAddress'}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                onChangeText={onChange}
                value={value}
                placeholder={'Masukkan alamat lengkap'}
                error={errors?.streetAddress?.message ?? ''}
              />
            )}
          />
        </View>
      </ScrollView>

      <View style={{ backgroundColor: Colors.white, padding: 16 }}>
        <CustomButton
          onPress={handleFormSubmit(submit)}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
    </View>
  );
};

export default ShippingAddressScreen;
