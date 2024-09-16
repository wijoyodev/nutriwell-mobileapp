import { launchImageLibrary } from 'react-native-image-picker';
import {
  getActive,
  getAvatar,
  getBirthDate,
  getEmail,
  getFullName,
  getGender,
  getPhoneCountryCode,
  getPhoneNumber,
  getUserId,
} from './StorageUtils';

const groupBy = (list: any[], keyGetter: (x: any) => any) => {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

const getPriceString = (price: number) => {
  return `Rp${(price ?? 0).toLocaleString('id-ID')}`;
};

const openGallery = (onSuccess: (attachment: any) => void = () => {}) => {
  try {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        // maxHeight: 200,
        // maxWidth: 200,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      response => {
        console.log('ImageResponse: ');
        console.log(response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else {
          const attachment = {
            uri: response?.assets?.[0].uri,
            type: response?.assets?.[0].type, // mime type
            name: response?.assets?.[0].fileName,
            size: response?.assets?.[0].fileSize ?? 0,
            height: response?.assets?.[0].height ?? 0,
            width: response?.assets?.[0].width ?? 0,
          };
          console.log({ attachment });

          onSuccess(attachment);
        }
      },
    );
  } catch (err) {
    console.log('Error Image Picker: ' + err);
  }
};

export type ProfileData = {
  email: string;
  name: string;
  imageUrl: string;
  gender: string;
  userId: string;
  birthDate: Date;
  phoneNumber: string;
  phoneCountryCode?: string;
  active?: boolean;
};

const getProfileFromStorage: () => Promise<ProfileData> = async () => {
  const email = await getEmail();
  const name = await getFullName();
  const imageUrl = await getAvatar();
  const gender = await getGender();
  const userId = await getUserId();
  const birthDate = await getBirthDate();
  const phoneNumber = await getPhoneNumber();
  const phoneCountryCode = await getPhoneCountryCode();
  const active = await getActive();

  return {
    email,
    name,
    imageUrl,
    gender,
    userId,
    birthDate,
    phoneNumber,
    phoneCountryCode,
    active,
  };
};

const Utils = {
  groupBy,
  getPriceString,
  openGallery,
  getProfileFromStorage,
};

export default Utils;
