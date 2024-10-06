/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import useGetRewardSummary from '../service/useGetRewardSummary';
import Utils from 'service/Utils';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';
import CustomButton from 'components/CustomButton';

const RewardSummaryComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { loading, rewardSummary, isActive } = useGetRewardSummary();
  const modalRef = useRef<CustomModalHandle | null>();

  if (loading) {
    return <></>;
  }

  return (
    <>
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          backgroundColor: Colors.blue,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (isActive) {
              navigate('reward-home');
            } else {
              modalRef.current?.openModal();
            }
          }}
          style={{
            backgroundColor: Colors.white,
            borderColor: Colors.black,
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 12,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2,
              marginRight: 12,
              borderRightWidth: 1,
              borderColor: Colors.disabled,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 12,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <MaterialIcon name={'paid'} size={10} />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 12,
                    marginLeft: 4,
                  }}>
                  Total Reward
                </Text>
              </View>

              <Icon name={'chevron-forward-outline'} color={Colors.black} />
            </View>

            <Text
              style={{
                color: Colors.black,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              {Utils.getPriceString(rewardSummary?.totalReward ?? 0)}
            </Text>
          </View>

          <View
            style={{
              flex: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 12,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <MaterialIcon name={'attach-money'} size={10} />
                <Text
                  style={{
                    color: Colors.black,
                    fontSize: 12,
                    marginLeft: 4,
                  }}>
                  Reward Bulan Ini
                </Text>
              </View>

              <Icon name={'chevron-forward-outline'} color={Colors.black} />
            </View>

            <View
              style={{
                backgroundColor: isActive ? Colors.white : Colors.placeholder,
                flex: 1,
                opacity: isActive ? 1 : 0.5,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  color: isActive ? Colors.black : Colors.placeholder,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                {Utils.getPriceString(rewardSummary?.monthlyReward ?? 0)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
              fontSize: 16,
              color: Colors.black,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 12,
            }}>
            Saat ini Anda tidak aktif
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              textAlign: 'center',
              marginBottom: 24,
            }}>
            Silakan lakukan pembelian untuk dapat mengaktifkan kembali member
            Anda dan mendapatkan komisi
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <CustomButton
              containerStyle={{
                flex: 1,
              }}
              onPress={() => {
                // onDelete();
                modalRef.current?.closeModal();
              }}
              text={'TUTUP'}
              backgroundColor={Colors.blue}
            />
          </View>
        </View>
      </CustomModal>
    </>
  );
};

export default RewardSummaryComponent;
