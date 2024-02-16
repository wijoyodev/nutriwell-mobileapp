/* eslint-disable react-native/no-inline-styles */
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainHomeScreen from 'screen/main-home/MainHomeScreen';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import RewardHomeScreen from 'screen/reward-home/RewardHomeScreen';

export type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const renderLabel = (name: String, { focused }) => {
    return (
      <Text
        style={{
          fontSize: 10,
          color: focused ? Colors.blue : Colors.disabled,
          fontWeight: focused ? 'bold' : 'normal',
        }}>
        {name}
      </Text>
    );
  };

  const renderIcon = (name: String, { focused }) => {
    return (
      <Icon
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
        sceneContainerStyle={{
          backgroundColor: Colors.white,
        }}
        tabBarOptions={{
          labelStyle: {},
          labelPosition: 'below-icon',
          activeTintColor: Colors.blue,
          tabStyle: {
            // paddingTop: 15,
            paddingBottom: 10,
            // backgroundColor: isDarkMode ? Colors.darkPrimary : 'transparent',
          },
        }}
        backBehavior={'history'}>
        <Tab.Screen
          name="main-home"
          children={() => <MainHomeScreen />}
          options={{
            headerShown: false,
            // title: 'HOME',
            tabBarLabel: props => renderLabel('Home', props),
            tabBarIcon: ({ focused }) => renderIcon('home', { focused }),
          }}
        />

        <Tab.Screen
          name="reward-home"
          children={() => <RewardHomeScreen />}
          options={{
            headerShown: false,
            // title: 'HOME',
            tabBarLabel: props => renderLabel('Reward', props),
            tabBarIcon: ({ focused }) => renderIcon('dollar', { focused }),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
