/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import CustomButton from 'components/CustomButton';
import CustomTextInput from 'components/CustomTextInput';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ActivityIndicator, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { withdrawSchema } from '../schema/withdrawSchema';
import { useRoute } from '@react-navigation/native';
import Utils from 'service/Utils';
import useGetBankAccount from '../service/useGetBankAccount';
import { DisbursementRequest } from 'network/reward/create-disbursement';

type WithdrawForm = {
  nominal: string;
};

export type ProcessWithdrawComponentProps = {
  onSubmit?: (request: DisbursementRequest) => void;
};

const ProcessWithdrawComponent: React.FC<ProcessWithdrawComponentProps> = ({
  onSubmit,
}) => {
  const { loading, bankAccount } = useGetBankAccount();
  const { params } = useRoute();
  const redeemableReward = params?.redeemableReward ?? 0;
  const formInitialValues: WithdrawForm = {
    nominal: '',
  };

  const formMethods = useForm({
    resolver: yupResolver(withdrawSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = formMethods;

  const submit: SubmitHandler<WithdrawForm> = (data: WithdrawForm) => {
    console.log(data);
    const request: DisbursementRequest = {
      amount: parseInt(data.nominal, 10),
      account_bank_code: bankAccount?.account_bank_code ?? '',
      account_bank_name: bankAccount?.account_bank_name ?? '',
      account_bank_number: bankAccount?.account_bank_number ?? '',
    };
    onSubmit?.(request);
  };

  const renderValue = (text: string) => {
    if (!text) {
      return '';
    }

    return parseInt(text, 10).toLocaleString('id-ID');
  };

  const renderEmptyBank = () => (
    <View>
      <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
        Belum ada akun bank
      </Text>
      <Text style={{ fontSize: 14, color: Colors.black, marginTop: 6 }}>
        Tambah akun bank untuk dapat menarik komisi Anda
      </Text>
    </View>
  );

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ marginBottom: 6, color: Colors.black }}>
            Jumlah Reward
          </Text>
          <Controller
            control={control}
            name={'nominal'}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                keyboardType={'numeric'}
                onChangeText={(text: string) => {
                  if (text === '') {
                    onChange('');
                    return;
                  }

                  const newText = text.replace(/\./gi, '');
                  console.log('Ini newText: ', newText);
                  const number = parseInt(newText, 10);
                  if (isNaN(number)) {
                    return;
                  }
                  if (number > redeemableReward) {
                    onChange(redeemableReward.toString());
                  } else {
                    onChange(number.toString());
                  }
                }}
                value={renderValue(value)}
                prefix={'Rp'}
                placeholder={'(Minimal Rp10.000)'}
                error={errors?.nominal?.message ?? ''}
              />
            )}
          />

          <Text style={{ marginTop: 8 }}>
            Reward yang bisa dicairkan{' '}
            <Text style={{ fontWeight: 'bold' }}>
              {Utils.getPriceString(redeemableReward)}
            </Text>
          </Text>
        </View>

        <View
          style={{
            padding: 16,
            borderTopColor: Colors.grey,
            borderTopWidth: 4,
          }}>
          <Text>AKUN BANK</Text>

          {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
          <View
            style={{
              marginTop: 16,
              padding: 16,
              borderColor: Colors.grey,
              borderWidth: 1,
              borderRadius: 16,
            }}>
            {bankAccount?.account_bank ? (
              <>
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.black,
                    fontWeight: 'bold',
                  }}>
                  {bankAccount?.account_bank_name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.black,
                    marginTop: 6,
                  }}>
                  {bankAccount?.account_bank}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.black,
                  }}>
                  {bankAccount?.account_bank_number}
                </Text>
              </>
            ) : (
              renderEmptyBank()
            )}
          </View>

          <Text style={{ marginTop: 12 }}>
            Anda dapat mengubah rekening tujuan Anda di menu Profil Saya yang
            terdapat di menu Akun Saya
          </Text>
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <CustomButton
          disabled={!bankAccount?.account_bank}
          onPress={handleFormSubmit(submit)}
          backgroundColor={Colors.blue}
          text={'TARIK SEKARANG'}
        />
      </View>
    </>
  );
};

export default ProcessWithdrawComponent;
