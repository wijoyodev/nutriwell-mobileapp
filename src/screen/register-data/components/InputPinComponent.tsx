/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import CustomPin from 'components/CustomPin';

export type InputPinComponentProps = {
  onComplete?: (pin: string) => void;
};

const InputPinComponent: React.FC<InputPinComponentProps> = ({
  onComplete,
}) => {
  const [pin, setPin] = useState('');
  useEffect(() => {
    if (pin.length === 6) {
      onComplete?.(pin);
    }
  }, [pin, onComplete]);

  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: Colors.black,
        }}>
        Buat PIN
      </Text>
      <Text
        style={{
          color: Colors.black,
          fontSize: 14,
          marginTop: 8,
          marginBottom: 78,
        }}>
        Email Anda sudah berhasil diverifiksai, silakan buat pin untuk akun Anda
      </Text>

      <CustomPin value={pin} onChangeValue={setPin} />
    </View>
  );
};

export default InputPinComponent;
