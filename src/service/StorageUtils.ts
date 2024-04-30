import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_KEY = 'email';
const FULL_NAME_KEY = 'full_name';
const AVATAR_KEY = 'avatar';
const ACCESS_TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const getAccessToken = async (): Promise<string> => {
  const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);

  return accessToken ?? '';
};

const setAccessToken = async (accessToken: string): Promise<void> => {
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const getRefreshToken = async (): Promise<string> => {
  const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);

  return refreshToken ?? '';
};

const setRefreshToken = async (refreshToken: string): Promise<void> => {
  await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

const getEmail = async (): Promise<string> => {
  const email = await AsyncStorage.getItem(EMAIL_KEY);

  return email ?? '';
};

const setEmail = async (email: string): Promise<void> => {
  await AsyncStorage.setItem(EMAIL_KEY, email);
};

const getFullName = async (): Promise<string> => {
  const fullName = await AsyncStorage.getItem(FULL_NAME_KEY);

  return fullName ?? '';
};

const setFullName = async (fullName: string): Promise<void> => {
  await AsyncStorage.setItem(FULL_NAME_KEY, fullName);
};

const getAvatar = async (): Promise<string> => {
  const avatar = await AsyncStorage.getItem(AVATAR_KEY);

  return avatar ?? '';
};

const setAvatar = async (avatar: string): Promise<void> => {
  await AsyncStorage.setItem(AVATAR_KEY, avatar);
};

export {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  getEmail,
  setEmail,
  getFullName,
  setFullName,
  getAvatar,
  setAvatar,
};
