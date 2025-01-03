import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setAvatar,
  setBirthDate,
  setEmail,
  setFullName,
  setGender,
  setPhoneNumber,
  setRefreshToken,
  setUserId,
} from 'service/StorageUtils';
import { PublicAPIResponse } from './model';
import { Linking } from 'react-native';
import { LOGIN_SCREEN_LINK } from 'navigation/constants';
const qs = require('qs');

export const API_URL = 'https://api.garenahealthy.com';
export const BACKOFFICE_URL = 'https://backoffice.garenahealthy.com';

const TOKEN_EXPIRED_ERROR = 'TokenExpiredError';
const UNAUTHORIZED = 'Unauthorized';

const post = async (url: string, data: any) => {
  const token = await getAccessToken();
  const headers = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    : {
        'Content-Type': 'application/json',
      };

  console.log('POST ', API_URL + url);
  console.log('Request body: ', data);
  let response = await fetch(API_URL + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      if (isMessageUnathorized(result)) {
        return handleDenied(() => post(url, data));
      }
      return result;
    });
  return response;
};

const patch = async (url: string, data: any) => {
  const token = await getAccessToken();
  const headers = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    : {
        'Content-Type': 'application/json',
      };

  console.log('PATCH ', API_URL + url);
  let response = await fetch(API_URL + url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      if (isMessageUnathorized(result)) {
        return handleDenied(() => patch(url, data));
      }
      return result;
    });
  return response;
};

const deleteApi = async (url: string, data: any) => {
  const token = await getAccessToken();
  const headers = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    : {
        'Content-Type': 'application/json',
      };

  console.log('DELETE ', API_URL + url);
  let response = await fetch(API_URL + url, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      if (isMessageUnathorized(result)) {
        return handleDenied(() => deleteApi(url, data));
      }
      return result;
    });
  return response;
};

const get = async (url: string, data: any = null) => {
  try {
    const token = await getAccessToken();
    // console.log('Token: ', token);
    const headers = token
      ? {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          'Content-Type': 'application/json',
        };

    console.log(`GET ${API_URL}${url}${data ? '?' : ''}${qs.stringify(data)}`);
    let response = await fetch(
      `${API_URL}${url}${data ? '?' : ''}${qs.stringify(data)}`,
      {
        headers: headers,
      },
    )
      .then(payload => {
        return payload.json();
      })
      .then(result => {
        if (isMessageUnathorized(result)) {
          return handleDenied(() => get(url, data));
        }
        return result;
      });
    return response;
  } catch (err) {
    console.log({ err });
    //document.location="/unavailable";
    return {
      status: 0,
      error: err,
      message: err.message,
    };
  }
};

const postWithForm = async (url: string, data: any) => {
  const token = await getAccessToken();
  const headers = token
    ? {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      }
    : {
        'Content-Type': 'multipart/form-data',
      };

  const formData = new FormData();
  for (let k in data) {
    formData.append(k, data[k]);
  }

  console.log('POST with Form ', API_URL + url);
  console.log('Form Data: ', formData);
  let response = await fetch(API_URL + url, {
    method: 'POST',
    body: formData,
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      console.log('POST Form Result: ', result);
      if (isMessageUnathorized(result)) {
        return handleDenied(() => postWithForm(url, data));
      }
      return result;
    })
    .catch(err => {
      return {
        status: 0,
        error: err,
        message: err.message,
      };
    });
  return response;
};

const patchWithForm = async (url: string, data: any, resetToken?: string) => {
  const token = await getAccessToken();
  const resetTokenHeader = resetToken
    ? {
        'x-reset-token': resetToken,
      }
    : {};
  let headers = token
    ? {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
        ...resetTokenHeader,
      }
    : {
        'Content-Type': 'multipart/form-data',
        ...resetTokenHeader,
      };
  const formData = new FormData();
  for (let k in data) {
    formData.append(k, data[k]);
  }

  console.log('Headers: ', headers);
  console.log('Form data: ', formData);
  console.log('PATCH ', API_URL + url);
  let response = await fetch(API_URL + url, {
    method: 'PATCH',
    body: formData,
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      console.log('PATCH Form Result: ', result);
      if (isMessageUnathorized(result)) {
        return handleDenied(() => patchWithForm(url, data));
      }
      return result;
    })
    .catch(err => {
      return {
        status: 0,
        error: err,
        message: err.message,
      };
    });
  return response;
};

const handleDenied = (callback: () => any) => {
  console.log('handle denied');
  Linking.openURL(LOGIN_SCREEN_LINK);
  // return refresh();
};

export type RefreshResponse = {
  user_id: number;
  email: string;
  full_name: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  avatar_url: string;
  token: string;
  refresh_token: string;
};

export type RefreshRequest = {
  token: string;
  refresh_token: string;
};

// TODO: need to handle refresh token properly in the future
const refresh: (
  callback: () => any,
) => Promise<PublicAPIResponse<RefreshResponse>> = async (
  callback: () => any,
) => {
  console.log('Call refresh token');
  const token = await getAccessToken();
  const refresh_token = await getRefreshToken();

  const request: RefreshRequest = {
    token,
    refresh_token,
  };

  const response: PublicAPIResponse<RefreshResponse> = await Api.post(
    '/refresh',
    request,
  );

  console.log('Response refresh: ', response);
  if (response.result) {
    await setAccessToken(response.result.token);
    await setRefreshToken(response.result.refresh_token);
    await setEmail(response.result.email);
    await setFullName(response.result.full_name);
    await setAvatar(response.result.avatar_url);
    await setGender(response.result.gender);
    await setBirthDate(response.result.date_of_birth);
    await setPhoneNumber(response.result.phone_number);
    await setUserId(response.result.user_id.toString());

    return callback();
  } else {
    return null;
  }
};

const isMessageUnathorized = (result: { message: string }) => {
  return (
    result.message === TOKEN_EXPIRED_ERROR || result.message === UNAUTHORIZED
  );
};

const Api = {
  post,
  patch,
  get,
  deleteApi,
  postWithForm,
  patchWithForm,
};

export default Api;
