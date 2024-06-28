import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getOrderHistory, {
  OrderHistoryItemResponse,
} from 'network/shop/order-history';

export type OrderHistory = {
  id: string;
  orderId: string;
  createdDate: Date;
  status: number;
  items: HistoryItem[];
  totalPrice: number;
  totalPriceAfterTax: number;
  paymentUrl: string;
};

export type HistoryItem = {
  name: string;
  quantity: number;
  price: number;
  priceAfterTax: number;
  totalPrice: number;
  totalPriceAfterTax: number;
  imageUrl: string;
};

const useGetOrderHistory = (status: number, offset: number) => {
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      if (offset === 0) {
        setOrderHistory([]);
      }
      getOrderHistory({ status, offset }).then(response => {
        console.log(
          'Response order history list: ',
          response.result,
          ' offset: ',
          offset,
        );
        setLoading(false);

        console.log('Response product detail history: ', response.result.data[0].product_detail);
        const histories: OrderHistory[] = mapOrderHistoryResponse(
          response.result?.data ?? [],
        );
        const orderHistoryList: OrderHistory[] =
          offset === 0 ? histories : [...orderHistory, ...histories];
        setOrderHistory(orderHistoryList);
      });
    }, [offset, status]),
  );

  return { loading, orderHistory };
};

const mapOrderHistoryResponse: (
  response: OrderHistoryItemResponse[],
) => OrderHistory[] = (response: OrderHistoryItemResponse[]) => {
  return response.map(history => ({
    id: history.id.toString(),
    orderId: history.order_number,
    createdDate: new Date(history.created_at),
    status: history.status,
    totalPrice: history.total_purchase,
    totalPriceAfterTax: history.total_purchase_after_tax,
    items: [
      {
        name: history.product_detail.product_name,
        quantity: history.product_detail.quantity,
        price: history.product_detail.price,
        priceAfterTax: history.product_detail.price_after_tax,
        totalPrice: history.product_detail.total_price,
        totalPriceAfterTax: history.product_detail.total_price_after_tax,
        imageUrl: history.product_detail.product_image?.[0] ?? '',
      },
    ],
    paymentUrl: history.payment_url,
  }));
};

export default useGetOrderHistory;
