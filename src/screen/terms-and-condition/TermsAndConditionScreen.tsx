/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import Colors from 'themes/Colors';

const TermsAndConditionScreen = () => {
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
