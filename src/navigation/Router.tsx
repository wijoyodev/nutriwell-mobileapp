import React, { FunctionComponent } from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from 'screen/splash/SplashScreen';
import {
  CART_SCREEN,
  CHECK_OUT_SCREEN,
  FORGET_PIN_SCREEN,
  HISTORY_DETAIL_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  NETWORK_DETAIL_SCREEN,
  NETWORK_LEVEL_SCREEN,
  ORDER_HISTORY_SCREEN,
  PIN_LOGIN_SCREEN,
  WITHDRAW_SCREEN,
  REFERENCE_NETWORK_SCREEN,
  REGISTER_DATA_SCREEN,
  REGISTER_SCREEN,
  RESET_PIN_SCREEN,
  SHIPPING_ADDRESS_SCREEN,
  SPLASH_SCREEN,
  REWARD_HISTORY_SCREEN,
} from './constants';
import HomeScreen from 'screen/home/HomeScreen';
import LoginScreen from 'screen/login/LoginScreen';
import RegisterScreen from 'screen/register/RegisterScreen';
import RegisterDataScreen from 'screen/register-data/RegisterDataScreen';
import PinLoginScreen from 'screen/pin-login/PinLoginScreen';
import ForgetPinScreen from 'screen/forget-pin/ForgetPinScreen';
import ResetPinScreen from 'screen/reset-pin/ResetPinScreen';
import CartScreen from 'screen/cart/CartScreen';
import CheckOutScreen from 'screen/check-out/CheckOutScreen';
import ShippingAddressScreen from 'screen/shipping-address/ShippingAddressScreen';
import OrderHistoryScreen from 'screen/order-history/OrderHistoryScreen';
import HistoryDetailScreen from 'screen/history-detail/HistoryDetailScreen';
import ReferenceNetworkScreen from 'screen/reference-network/ReferenceNetworkScreen';
import NetworkDetailScreen from 'screen/network-detail/NetworkDetailScreen';
import NetworkLevelScreen from 'screen/network-level/NetworkLevelScreen';
import WithdrawScreen from 'screen/withdraw/WithdrawScreen';
import RewardHistoryScreen from 'screen/reward-history/RewardHistoryScreen';

const Stack = createStackNavigator();

type ScreenObject = {
  name: string;
  screen: FunctionComponent<any>;
  options?: StackNavigationOptions;
};

const screens: ScreenObject[] = [
  {
    name: SPLASH_SCREEN,
    screen: SplashScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: REGISTER_SCREEN,
    screen: RegisterScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: REGISTER_DATA_SCREEN,
    screen: RegisterDataScreen,
    options: {
      headerTitle: 'Registrasi',
      headerTitleAlign: 'center',
    },
  },
  {
    name: LOGIN_SCREEN,
    screen: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: PIN_LOGIN_SCREEN,
    screen: PinLoginScreen,
    options: {
      headerTitle: 'Masukkan PIN',
      headerTitleAlign: 'center',
    },
  },
  {
    name: FORGET_PIN_SCREEN,
    screen: ForgetPinScreen,
    options: {
      headerTitle: 'Lupa PIN',
      headerTitleAlign: 'center',
    },
  },
  {
    name: RESET_PIN_SCREEN,
    screen: ResetPinScreen,
    options: {
      headerTitle: 'Lupa PIN',
      headerTitleAlign: 'center',
    },
  },
  {
    name: HOME_SCREEN,
    screen: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: CART_SCREEN,
    screen: CartScreen,
    options: {
      headerTitle: 'Keranjang Saya',
      headerTitleAlign: 'center',
    },
  },
  {
    name: CHECK_OUT_SCREEN,
    screen: CheckOutScreen,
    options: {
      headerTitle: 'Check Out',
      headerTitleAlign: 'center',
    },
  },
  {
    name: SHIPPING_ADDRESS_SCREEN,
    screen: ShippingAddressScreen,
    options: {
      headerTitle: 'Alamat Pengiriman',
      headerTitleAlign: 'center',
    },
  },
  {
    name: ORDER_HISTORY_SCREEN,
    screen: OrderHistoryScreen,
    options: {
      headerTitle: 'Histori Pesanan',
      headerTitleAlign: 'center',
    },
  },
  {
    name: HISTORY_DETAIL_SCREEN,
    screen: HistoryDetailScreen,
    options: {
      headerTitle: 'Rincian Pesanan',
      headerTitleAlign: 'center',
    },
  },
  {
    name: REFERENCE_NETWORK_SCREEN,
    screen: ReferenceNetworkScreen,
    options: {
      headerTitle: 'Reference Network',
      headerTitleAlign: 'center',
    },
  },
  {
    name: NETWORK_DETAIL_SCREEN,
    screen: NetworkDetailScreen,
    options: {
      headerTitle: 'Reference Network Detail',
      headerTitleAlign: 'center',
    },
  },
  {
    name: NETWORK_LEVEL_SCREEN,
    screen: NetworkLevelScreen,
    options: {
      headerTitle: 'Level',
      headerTitleAlign: 'center',
    },
  },
  {
    name: WITHDRAW_SCREEN,
    screen: WithdrawScreen,
    options: {
      headerTitle: 'Tarik Dana',
      headerTitleAlign: 'center',
    },
  },
  {
    name: REWARD_HISTORY_SCREEN,
    screen: RewardHistoryScreen,
    options: {
      headerTitle: 'Histori Reward',
      headerTitleAlign: 'center',
    },
  },
];
let loaded = false;
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        // headerShown: false,
        gestureEnabled: false,
      }}
      screenListeners={({ navigation }) => ({
        state: _ => {
          // Do something with the state

          // Do something with the `navigation` object
          if (!navigation.canGoBack()) {
            if (!loaded) {
              loaded = true;
            }
            //exit app when at the last stack
            else {
              loaded = false;
              // RNExitApp.exitApp();
            }
          }
        },
      })}>
      {screens.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            component={item.screen}
            options={item.options}
            key={index}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Router;
