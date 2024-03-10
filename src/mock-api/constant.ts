import { ProfileResponse } from 'network/auth/profile';
import { CartItem } from 'screen/cart/CartScreen';
import { NetworkType, RewardSummary } from 'screen/reward-home/RewardHomeScreen';
import { Product } from 'screen/shop-home/ShopHomeScreen';

export const product: Product = {
  imageUrl: '',
  name: 'GARAM Kurang Natrium 200 gram',
  price: 150000,
  description:
    'Lorem ipsum dolor sit amet consectetur. Egestas posuere at parturient facilisi in sit nulla. Pretium est mauris elit dolor eget integer. Lorem ipsum dolor sit amet consectetur. Egestas posuere at parturient facilisi in sit nulla. Pretium est mauris elit dolor eget integer.',
};

const networkList: NetworkType[] = [
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