/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import dayjs from 'dayjs';
import Colors from './Colors';
import { Text } from 'react-native';

export type Status = {
  label: string;
  color: string;
  headerColor: string;
  headerLabel?: string;
  headerDescription?: (
    paymentDate: Date,
    method: string,
    shippingDate: Date,
  ) => string | React.ReactNode;
};

const Status = new Map<number, Status>([
  [
    4,
    {
      label: 'Dibatalkan',
      color: '#F22929',
      headerColor: '#FFEFEF',
      headerLabel: 'Dibatalkan',
      headerDescription: () =>
        'Pesanan Anda dibatalkan karena sudah melewati batas waktu pembayaran.',
    },
  ],
  [
    0,
    {
      label: 'Belum Bayar',
      color: Colors.orangeIcon,
      headerColor: Colors.cream,
      headerLabel: 'Menunggu Pembayaran',
      headerDescription: (paymentDate: Date, method: string, _) => (
        <>
          <Text>Silakan lakukan pembayaran paling lambat </Text>
          <Text style={{ fontWeight: 'bold' }}>
            {dayjs(paymentDate).format('DD MMM YYYY HH:mm')}
          </Text>{' '}
          <Text>dengan metode {method}</Text>
        </>
      ),
    },
  ],
  [
    1,
    {
      label: 'Dikemas',
      color: Colors.orangeIcon,
      headerColor: Colors.lightBlue2,
      headerLabel: 'Sedang Dikemas',
      headerDescription: () =>
        'Produk yang Anda beli sedang dalam dikemas oleh kami.',
    },
  ],
  [
    2,
    {
      label: 'Dikirim',
      color: Colors.orangeIcon,
      headerColor: Colors.lightBlue2,
      headerLabel: 'Dalam Pengiriman',
      headerDescription: (
        paymentDate: Date,
        method: string,
        shippingDate: Date,
      ) =>
        `Produk yang Anda beli sedang dalam pengiriman dan akan tiba sebelum ${dayjs(
          shippingDate,
        ).format('DD MMMM YYYY')}`,
    },
  ],
  [
    3,
    {
      label: 'Selesai',
      color: Colors.green,
      headerColor: '',
    },
  ],
]);

export default Status;
