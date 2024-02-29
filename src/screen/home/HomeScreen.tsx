/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainHomeScreen from 'screen/main-home/MainHomeScreen';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import RewardHomeScreen from 'screen/reward-home/RewardHomeScreen';
import ShopHomeScreen from 'screen/shop-home/ShopHomeScreen';
import AccountHomeScreen from 'screen/account-home/AccountHomeScreen';

export type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Tab = createMaterialBottomTabNavigator();

const HomeScreen: React.FC<HomeScreenProps> = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.blue);
    StatusBar.setBarStyle('light-content');
  });

  const renderIcon = (name: String, { focused }) => {
    return (
      <Icon
        name={name}
        color={focused ? Colors.blue : Colors.disabled}
        size={18}
      />
    );
  };

  const renderFontIcon = (name: String, { focused }) => {
    return (
      <FontIcon
        name={name}
        color={focused ? Colors.blue : Colors.disabled}
        size={18}
      />
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <Tab.Navigator
        // compact={true}
        sceneAnimationEnabled={true}
        sceneAnimationType={'shifting'}
        // shifting={true}
        barStyle={{
          borderTopWidth: 1,
          borderTopColor: Colors.grey,
          backgroundColor: Colors.white,
        }}
        activeIndicatorStyle={{
          backgroundColor: Colors.white,
        }}
        activeColor={Colors.blue}
        inactiveColor={Colors.disabled}
        backBehavior={'history'}>
        <Tab.Screen
          name="main-home"
          children={() => <MainHomeScreen />}
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ focused }) =>
              renderIcon('home-outline', { focused }),
          }}
        />

        <Tab.Screen
          name="shop-home"
          children={() => <ShopHomeScreen />}
          options={{
            headerShown: false,
            title: 'Belanja',
            tabBarIcon: ({ focused }) => renderIcon('bag-outline', { focused }),
          }}
        />

        <Tab.Screen
          name="reward-home"
          children={() => <RewardHomeScreen />}
          options={{
            headerShown: false,
            title: 'Reward',
            tabBarIcon: ({ focused }) => renderFontIcon('dollar', { focused }),
          }}
        />

        <Tab.Screen
          name="account-home"
          children={() => <AccountHomeScreen />}
          options={{
            headerShown: false,
            title: 'Akun Saya',
            tabBarIcon: ({ focused }) => renderIcon('person-outline', { focused }),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
