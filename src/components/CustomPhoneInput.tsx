/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

export type CustomPhoneInputProps = {
  style?: TextStyle;
  containerStyle?: ViewStyle;
  onChangeText?: (text: string) => void;
  error?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  code: string;
  onChangeCode?: (text: string) => void;
  country?: string;
  onChangeCountry?: (text: string) => void;
};

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = props => {
  const [visible, setVisible] = useState(false);
  const textColor = props.disabled
    ? Colors.disabled
    : props.error
    ? Colors.red
    : Colors.black;

  return (
    <>
      <View
        style={{
          ...props.containerStyle,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: props.disabled ? Colors.disabled : Colors.grey,
          paddingHorizontal: 12,
          backgroundColor: props.disabled ? Colors.disabledBg : Colors.white,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            height: 28,
            borderRightWidth: 1,
            borderRightColor: Colors.disabled,
            paddingRight: 12,
            marginRight: 12,
          }}>
          <CountryPicker
            withFlag={true}
            withCallingCode={true}
            onSelect={(country: Country) => {
              props.onChangeCode?.(`+${country.callingCode}`);
              props.onChangeCountry?.(country.cca2);
            }}
            onClose={() => setVisible(false)}
            renderFlagButton={() => <></>}
            renderCountryFilter={() => <></>}
            visible={visible}
          />
          <Text style={{ fontSize: 14, color: Colors.black }}>
            {props.code}
          </Text>
          <Icon name={'chevron-down'} color={Colors.black} />
        </TouchableOpacity>
        <TextInput
          returnKeyLabel="Done"
          returnKeyType="done"
          keyboardType={'default'}
          {...props}
          placeholder={props.placeholder}
          value={props.value}
          editable={!props.disabled}
          style={{
            ...props.style,
            // ...styles.textInput,
            flex: 1,
            minHeight: 32,
            fontSize: 14,
            color: textColor,
          }}
          onChangeText={props.onChangeText}
          placeholderTextColor={Colors.placeholder}
          autoFocus={false}
          autoCorrect={false}
          blurOnSubmit={false}
        />
      </View>
      {props.error && (
        <Text
          style={{
            color: Colors.red,
            marginBottom: 4,
            marginTop: 4,
            fontSize: 12,
          }}>
          {props.error}
        </Text>
      )}
    </>
  );
};

export default CustomPhoneInput;
