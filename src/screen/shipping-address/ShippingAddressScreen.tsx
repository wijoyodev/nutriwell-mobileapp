/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import CustomPhoneInput from 'components/CustomPhoneInput';
import CustomPicker from 'components/CustomPicker';
import CustomTextInput from 'components/CustomTextInput';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { shippingAddressSchema } from './schema/shippingAddressSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import updateAddress from 'network/shop/update-address';
import createAddress, { AddressRequest } from 'network/shop/create-address';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';
import useGetProvince from './service/useGetProvince';
import useGetCity from './service/useGetCity';
import useGetDistrict from './service/useGetDistrict';

export type AddressOption = {
  id: number;
  name: string;
};

export type ShippingAddressForm = {
  id?: string;
  name: string;
  phoneNumber: string;
  code: string;
  province: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
};

const ShippingAddressScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute<RouteProp<ParamListBase>>();

  const [loading, setLoading] = useState(false);

  const snackbarRef = useRef<CustomSnackbarHandle | null>();

  let formInitialValues: ShippingAddressForm = {
    id: '',
    name: '',
    phoneNumber: '',
    code: '+62',
    province: '',
    city: '',
    district: '',
    streetAddress: '',
    postalCode: '',
  };

  if (params?.data) {
    formInitialValues = params?.data;
  }

  const formMethods = useForm({
    resolver: yupResolver(shippingAddressSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    watch,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    setValue,
  } = formMethods;

  const province = watch('province');
  const city = watch('city');

  const { provinces, fetched: provinceFetched } = useGetProvince();
  const { cityList, fetched: cityFetched } = useGetCity(
    parseInt(province.split('#')[0], 10),
  );
  const { districtList } = useGetDistrict(parseInt(city.split('#')[0], 10));

  const [provinceList, setProvinceList] = useState<AddressOption[]>([]);
  const [cityPickerList, setCityPickerList] = useState<AddressOption[]>([]);

  useEffect(() => {
    if (provinceFetched) {
      setProvinceList(provinces);
    }
  }, [provinceFetched, provinces]);

  useEffect(() => {
    if (cityFetched) {
      setCityPickerList(cityList);
    }
  }, [cityFetched, cityList]);

  const handleSearchProvince = (text: string) => {
    const provinceValues = provinces.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setProvinceList(provinceValues);
  };

  const handleSearchCity = (text: string) => {
    const cityValues = cityList.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setCityPickerList(cityValues);
  };

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
    const request: AddressRequest = {
      recipient_name: data.name,
      recipient_phone_number: data.phoneNumber,
      phone_number_country: data.code,
      province: data.province.split('#')[1],
      city: data.city.split('#')[1],
      district: data.district,
      postal_code: data.postalCode,
      address_detail: data.streetAddress,
    };
    console.log(request);
    setLoading(true);
    if (data.id) {
      updateAddress(request)
        .then(handleSaveAddress)
        .catch(err => {
          console.log('Error update address: ', err);
          setLoading(false);
          snackbarRef?.current?.showSnackbarUnknownError();
        });
    } else {
      createAddress(request)
        .then(handleSaveAddress)
        .catch(err => {
          console.log('Error create address: ', err);
          setLoading(false);
          snackbarRef?.current?.showSnackbarUnknownError();
        });
    }
  };

  const handleSaveAddress = (response: any) => {
    setLoading(false);
    console.log('Response save address: ', response);
    if (response.result) {
      snackbarRef?.current?.showSnackbarSuccess(
        'Berhasil mengubah alamat pengiriman.',
      );
      goBack();
    } else {
      snackbarRef?.current?.showSnackbarUnknownError();
    }
  };

  const code = watch('code');

  return (
    <SafeAreaView
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
                onChangeCode={codeValue => setValue('code', codeValue)}
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
                items={provinceList}
                placeholder={'Pilih provinsi'}
                renderOption={renderOption}
                value={value}
                enableSearch={true}
                placeholderSearch={'Cari provinsi'}
                onChangeSearch={handleSearchProvince}
                renderValue={(val: string) => val.split('#')?.[1] ?? ''}
                onSelect={(item: AddressOption) => {
                  onChange(`${item.id}#${item.name}`);
                  setValue('city', '');
                  setValue('district', '');
                }}
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
                items={cityPickerList}
                placeholder={'Pilih kota'}
                renderOption={renderOption}
                value={value}
                renderValue={(val: string) => val.split('#')?.[1] ?? ''}
                enableSearch={true}
                placeholderSearch={'Cari kota'}
                onChangeSearch={handleSearchCity}
                onSelect={(item: AddressOption) => {
                  onChange(`${item.id}#${item.name}`);
                  setValue('district', '');
                }}
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
                items={districtList}
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
          loading={loading}
          onPress={handleFormSubmit(submit)}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;
