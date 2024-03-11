import { createServer, Model } from 'miragejs';
import {
  address,
  cartItems,
  networkDetail,
  networkList,
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

      this.get('/network', () => ({
        data: networkDetail,
      }));

      this.get('/network/level', () => ({
        data: networkList,
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
