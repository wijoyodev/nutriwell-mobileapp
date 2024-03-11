import { createServer, Model } from 'miragejs';
import {
  address,
  cartItems,
  historyList,
  historyRewardSummary,
  networkDetail,
  networkList,
  orderHistoryList,
  paymentList,
  product,
  profile,
  rewardSummary,
  shippingOptions,
} from './constant';

export default function () {
  return createServer({
    models: {
      reminder: Model,
    },

    routes() {
      this.get('/profile', () => ({
        data: profile,
      }));

      this.get('/reward/summary', () => ({
        data: rewardSummary,
      }));

      this.get('/product', () => ({
        data: product,
      }));

      this.get('/cart', () => ({
        data: cartItems,
      }));

      this.get('/shipping-option', () => ({
        data: shippingOptions,
      }));

      this.get('/payment-method', () => ({
        data: paymentList,
      }));

      this.get('/checkout', () => ({
        data: {
          items: cartItems,
          address: address,
        },
      }));

      this.get('/order/history', () => ({
        data: orderHistoryList,
      }));

      this.get('/network', () => ({
        data: networkDetail,
      }));

      this.get('/network/level', () => ({
        data: networkList,
      }));

      this.get('/reward/history', () => ({
        data: {
          summary: historyRewardSummary,
          history: historyList,
        },
      }));

      this.get('/upline', () => ({
        data: {
          summary: historyRewardSummary,
          history: historyList,
        },
      }));

      let newId = 4;
      this.post('/api/reminders', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return { reminder: attrs };
      });
    },
  });
}
