import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'access_token';

const getAccessToken = async (): Promise<string> => {
  const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

  return accessToken ?? '';
};

export { getAccessToken };
