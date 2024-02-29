/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, Text } from 'react-native';
import Colors from 'themes/Colors';

const TermsAndConditionScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: Colors.white, padding: 16 }}>
      <Text style={{ color: Colors.black, fontSize: 14 }}>
        Terms and Condition
      </Text>
    </ScrollView>
  );
};

export default TermsAndConditionScreen;
