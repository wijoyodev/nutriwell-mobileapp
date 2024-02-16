/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export type CustomDatePickerProps = {
  value: DateType;
  onChangeValue: (date: DateType) => void;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChangeValue,
}) => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <View>
      <Modal visible={visible} onRequestClose={closeModal} transparent={true}>
        <Pressable
          onPress={closeModal}
          style={{
            flex: 1,
            // backgroundColor: Colors.white,
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          <View style={{ backgroundColor: Colors.white, borderRadius: 12 }}>
            <DateTimePicker
              mode="single"
              locale={'id'}
              date={value}
              displayFullDays={true}
              onChange={params => {
                onChangeValue(params.date);
                closeModal();
              }}
              calendarTextStyle={{
                color: Colors.black,
              }}
              selectedItemColor={Colors.blue}
              headerTextStyle={{
                color: Colors.black,
              }}
              weekDaysTextStyle={{
                color: Colors.black,
              }}
            />
          </View>
        </Pressable>
      </Modal>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{
          paddingVertical: 16,
          paddingHorizontal: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: Colors.grey,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: Colors.black }}>
            {dayjs(value).locale('id').format('DD MMMM YYYY')}
          </Text>
          <Icon name="calendar" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDatePicker;
