import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getOrderHistoryDetail from 'network/shop/order-history-detail';
import { HistoryItem } from 'screen/order-history/service/useGetOrderHistory';
import { OrderHistoryItemResponse } from 'network/shop/order-history';

type ShippingInfo = {
  name: string;
  resi: string;
  date: Date;
  etdDate: Date;
  price: number;
  courierName: string;
  courierServiceName: string;
  courierCompany: string;
  courierType: string;
};

type ShippingAddress = {
  id: number;
  name: string;
  phoneNumber: string;
  province: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
};

export type PaymentInfo = {
  paymentUrl: string;
  name: string;
  date: Date;
  approvedDate?: Date;
};

export type HistoryDetail = {
  orderId: string;
  createdDate: Date;
  status: number;
  items: HistoryItem[];
  shipping: ShippingInfo;
  shippingAddress: ShippingAddress;
  payment: PaymentInfo;
  totalPurchase: number;
  totalPurchaseAfterTax: number;
};

const useGetHistoryDetail = (id: string) => {
  const [historyDetail, setHistoryDetail] = useState<HistoryDetail>();
  const [loading, setLoading] = useState<boolean>();
  const [ppnTax, setPpnTax] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getOrderHistoryDetail(id).then(response => {
        console.log('Order history id: ', id, ' & response: ', response.result);
        setLoading(false);
        setHistoryDetail(convertHistoryDetail(response.result.data[0]));
        setPpnTax(response.result.tax_detail?.ppn_tax ?? 0);
      });
    }, [id]),
  );

  return { loading, historyDetail, ppnTax };
};

const convertHistoryDetail: (
  response: OrderHistoryItemResponse,
) => HistoryDetail = (response: OrderHistoryItemResponse) => {
  const detail: HistoryDetail = {
    orderId: response.order_number,
    createdDate: new Date(response.created_at),
    status: response.status,
    items: [
      {
        name: response.product_detail.product_name,
        quantity: response.product_detail.quantity,
        price: response.product_detail.price,
        priceAfterTax: response.product_detail.price_after_tax,
        totalPrice: response.product_detail.total_price,
        totalPriceAfterTax: response.product_detail.total_price_after_tax,
        imageUrl: response.product_detail.product_image?.[0] ?? '',
      },
    ],
    shippingAddress: {
      id: response.address_shipment_id,
      name: response.user_detail.recipient_name,
      phoneNumber: response.user_detail.recipient_phone_number,
      streetAddress: response.user_detail.address_detail,
      district: response.user_detail.district,
      city: response.user_detail.city,
      province: response.user_detail.province,
      postalCode: response.user_detail.postal_code,
    },
    shipping: {
      name: response.courier_name,
      price: response.courier_rate,
      etdDate: response.estimated_delivery_date
        ? new Date(response.estimated_delivery_date)
        : new Date(),
      resi: response.external_id ?? '',
      date: response.receive_date
        ? new Date(response.receive_date)
        : new Date(),
      courierName: response.courier_name,
      courierServiceName: response.courier_service_name,
      courierCompany: response.courier_company,
      courierType: response.courier_type,
    },
    payment: {
      paymentUrl: response.payment_url,
      name: response.payment_method ?? '',
      approvedDate: response.payment_date
        ? new Date(response.payment_date)
        : new Date(),
      date: response.payment_expiry_date
        ? new Date(response.payment_expiry_date)
        : new Date(),
    },
    totalPurchase: response.total_purchase,
    totalPurchaseAfterTax: response.total_purchase_after_tax,
  };

  return detail;
};

export default useGetHistoryDetail;
