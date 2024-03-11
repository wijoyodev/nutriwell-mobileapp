import { ProfileResponse } from 'network/auth/profile';
import { CartItem } from 'screen/cart/CartScreen';
import {
  Address,
  PaymentMethod,
  ShippingOption,
} from 'screen/check-out/CheckOutScreen';
import { NetworkTypeSummary } from 'screen/main-home/components/ReferenceNetworkComponent';
import { NetworkDetail } from 'screen/network-detail/NetworkDetailScreen';
import {
  NetworkType,
  RewardSummary,
} from 'screen/reward-home/RewardHomeScreen';
import { Product } from 'screen/shop-home/ShopHomeScreen';

export const product: Product = {
  imageUrl: '',
  name: 'GARAM Kurang Natrium 200 gram',
  price: 150000,
  description:
    'Lorem ipsum dolor sit amet consectetur. Egestas posuere at parturient facilisi in sit nulla. Pretium est mauris elit dolor eget integer. Lorem ipsum dolor sit amet consectetur. Egestas posuere at parturient facilisi in sit nulla. Pretium est mauris elit dolor eget integer.',
};

export const networkList: NetworkType[] = [
  {
    name: 'Gill Lucy',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy B',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy C',
    level: 1,
    network: 500,
  },
];

export const rewardSummary: RewardSummary = {
  totalReward: 25000000,
  redeemableReward: 22500000,
  monthlyReward: 1600000,
  totalReferenceNetwork: 50,
  referralCode: 'YBSH21',
  referenceNetworkList: networkList,
};

export const profile: ProfileResponse = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  imageUrl: '',
  birthDate: new Date(),
  phoneNumber: '(+62) 812312312',
  gender: 'male',
};

export const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'GARAM Kurang Natrium 200 gram',
    price: 10000,
    quantity: 11,
    imageUrl: '',
  },
  {
    id: '2',
    name: 'GARAM Kurang Natrium 100 gram',
    price: 5000,
    quantity: 2,
    imageUrl: '',
  },
];

export const shippingOptions: ShippingOption[] = [
  {
    name: 'JNE Regular',
    price: 10000,
    minEtd: 2,
    maxEtd: 3,
    etdType: 'days',
  },
  {
    name: 'Sicepat Express',
    price: 10000,
    minEtd: 2,
    maxEtd: 3,
    etdType: 'days',
  },
];

export const paymentList: PaymentMethod[] = [
  {
    name: 'Transfer Bank (BCA)',
  },
  {
    name: 'E-Wallet',
  },
  {
    name: 'Virtual Account',
  },
];

export const address: Address = {
  name: 'Yahya',
  phoneNumber: '+628127312',
  province: 'Jawa Barat',
  city: 'Bekasi',
  district: 'Cikarang Utara',
  streetAddress: 'Jl. Kesejahteraan no.1',
  postalCode: '17530',
};

export const networkSummary: NetworkTypeSummary[] = [
  {
    level: 1,
    totalNetwork: 50,
    totalActive: 20,
  },
  {
    level: 2,
    totalNetwork: 60,
    totalActive: 30,
  },
  {
    level: 3,
    totalNetwork: 70,
    totalActive: 40,
  },
];

export const networkDetail: NetworkDetail = {
  name: 'Gill Lucy',
  imageUrl: '',
  joinDate: new Date(),
  level: 2,
  monthlyPurchase: 1500000,
  networks: networkSummary,
};
