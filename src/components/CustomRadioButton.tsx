/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';

type DataType = {
  label: string;
  value: string;
};

export type CustomRadioButtonProps = {
  value: string;
  data: DataType[];
  onChange?: (value: string) => void;
};

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  value,
  data,
  onChange,
}) => {
  const renderItem = (item: DataType) => {
    return (
      <TouchableOpacity
        onPress={() => onChange?.(item.value)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
          marginRight: 20,
        }}>
        <View
          style={{
            height: 18,
            width: 18,
            borderRadius: 18,
            borderWidth: value === item.value ? 5 : 1,
            borderColor: value === item.value ? Colors.blue : Colors.black,
            marginRight: 8,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
          }}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };
  return <View style={{ flexDirection: 'row' }}>{data.map(renderItem)}</View>;
};

export default CustomRadioButton;
