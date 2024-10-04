import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_KEY = 'email';
const FULL_NAME_KEY = 'full_name';
const AVATAR_KEY = 'avatar';
const GENDER_KEY = 'gender';
const PHONE_NUMBER_KEY = 'phone_number';
const BIRTH_DATE_KEY = 'birth_date';
const USER_ID_KEY = 'user_id';
const PHONE_COUNTRY_CODE_KEY = 'phone_country_code';
const ACTIVE_KEY = 'active';
const ACCESS_TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const REFERRAL_CODE_KEY = 'referral_code';

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

const getReferralCode = async (): Promise<string> => {
  const referralCode = await AsyncStorage.getItem(REFERRAL_CODE_KEY);

  return referralCode ?? '';
};

const setReferralCode = async (referralCode: string): Promise<void> => {
  await AsyncStorage.setItem(REFERRAL_CODE_KEY, referralCode);
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

const getGender = async (): Promise<string> => {
  const gender = await AsyncStorage.getItem(GENDER_KEY);

  return gender ?? '';
};

const setGender = async (gender: string): Promise<void> => {
  await AsyncStorage.setItem(GENDER_KEY, gender);
};

const getPhoneNumber = async (): Promise<string> => {
  const phoneNumber = await AsyncStorage.getItem(PHONE_NUMBER_KEY);

  return phoneNumber ?? '';
};

const setPhoneNumber = async (phoneNumber: string): Promise<void> => {
  await AsyncStorage.setItem(PHONE_NUMBER_KEY, phoneNumber);
};

const getBirthDate = async (): Promise<Date> => {
  const birthDate = await AsyncStorage.getItem(BIRTH_DATE_KEY);

  return new Date(birthDate ?? '') ?? new Date();
};

const setBirthDate = async (birthDate: string): Promise<void> => {
  await AsyncStorage.setItem(BIRTH_DATE_KEY, birthDate);
};

const getUserId = async (): Promise<string> => {
  const userId = await AsyncStorage.getItem(USER_ID_KEY);

  return userId ?? '';
};

const setUserId = async (userId: string): Promise<void> => {
  await AsyncStorage.setItem(USER_ID_KEY, userId);
};

const getPhoneCountryCode = async (): Promise<string> => {
  const phoneCountry = await AsyncStorage.getItem(PHONE_COUNTRY_CODE_KEY);

  return phoneCountry ?? '';
};

const setPhoneCountryCode = async (phoneCountry: string): Promise<void> => {
  await AsyncStorage.setItem(PHONE_COUNTRY_CODE_KEY, phoneCountry);
};

const getActive = async (): Promise<boolean> => {
  const active = await AsyncStorage.getItem(ACTIVE_KEY);

  // return true;
  return active === 'true' ?? false;
};

const setActive = async (active: boolean): Promise<void> => {
  await AsyncStorage.setItem(ACTIVE_KEY, active.toString());
};

export {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  getReferralCode,
  setReferralCode,
  getEmail,
  setEmail,
  getFullName,
  setFullName,
  getAvatar,
  setAvatar,
  getGender,
  setGender,
  getPhoneNumber,
  setPhoneNumber,
  getBirthDate,
  setBirthDate,
  getUserId,
  setUserId,
  getPhoneCountryCode,
  setPhoneCountryCode,
  getActive,
  setActive,
};
