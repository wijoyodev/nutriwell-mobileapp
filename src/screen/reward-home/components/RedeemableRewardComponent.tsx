/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';
import { WITHDRAW_SCREEN } from 'navigation/constants';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from 'themes/Colors';
import { NetworkSummary, RewardSummary } from '../RewardHomeScreen';
import Utils from 'service/Utils';
import { getActive } from 'service/StorageUtils';

export type RedeemableRewardComponentProps = {
  reward: RewardSummary;
  networkSummary: NetworkSummary;
};

const RedeemableRewardComponent: React.FC<RedeemableRewardComponentProps> = ({
  reward,
  networkSummary,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const modalRef = useRef<CustomModalHandle | null>();
  const [heightView, setHeightView] = useState(0);

  useEffect(() => {
    getActive().then(setActive);
  }, []);

  const { width } = useWindowDimensions();
  return (
    <View style={{ position: 'relative', paddingTop: 16 }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: Colors.blue,
          height: heightView / 2 + 16,
          width: width,
          top: 0,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      />
      <View
        onLayout={event => {
          const { height } = event.nativeEvent.layout;
          setHeightView(height);
        }}
        style={{
          marginHorizontal: 16,
          padding: 16,
          borderRadius: 16,
          backgroundColor: Colors.lightBlue,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name={'dollar'} />
              <Text style={{ fontSize: 12, marginHorizontal: 6 }}>
                Reward yang bisa dicairkan
              </Text>
              <FeatherIcon
                onPress={() => modalRef.current?.openModal()}
                color={Colors.blue}
                name={'info'}
              />
            </View>

            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}>
              {active ? Utils.getPriceString(reward.redeemableReward) : '-'}
            </Text>
          </View>

          <CustomButton
            onPress={() =>
              navigate(WITHDRAW_SCREEN, {
                redeemableReward: reward.redeemableReward,
              })
            }
            backgroundColor={Colors.blue}
            text={'TARIK'}
            containerStyle={{ paddingHorizontal: 16 }}
          />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name={'dollar'} />
              <Text style={{ fontSize: 12, marginLeft: 6 }}>
                Reward Bulan ini
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                fontWeight: 'bold',
                marginTop: 4,
              }}>
              {active ? Utils.getPriceString(reward.monthlyReward) : '-'}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicon name={'people-outline'} />
              <Text style={{ fontSize: 12, marginLeft: 6 }}>
                Reference Network
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                fontWeight: 'bold',
                marginTop: 4,
              }}>
              {networkSummary.totalReferenceNetwork}
            </Text>
          </View>
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
                fontSize: 14,
                color: Colors.black,
                textAlign: 'center',
                marginBottom: 32,
              }}>
              Reward yang bisa dicairkan adalah total reward bulan kemarin &
              sebelumnya. Reward Anda bulan inihanya dapat dicairkan setiap
              bulan berikutnya.
            </Text>
            <CustomButton
              onPress={() => modalRef.current?.closeModal()}
              text={'TUTUP'}
              backgroundColor={Colors.blue}
            />
          </View>
        </CustomModal>
      </View>
    </View>
  );
};

export default RedeemableRewardComponent;
