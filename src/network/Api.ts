import { getAccessToken, getRefreshToken } from 'service/StorageUtils';
import { PublicAPIResponse } from './model';
const qs = require('qs');

// const API_URL = 'https://api.mentorbaik.com';
const API_URL = 'https://suitable-evidently-caribou.ngrok-free.app';

const post = async (url: string, data: any) => {
  const token = await getAccessToken();
  console.log('token: ', token);
  const headers = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    : {
        'Content-Type': 'application/json',
      };

  console.log(API_URL + url);
  let response = await fetch(API_URL + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      if (result.status === 0 && result.error === 'access_denied') {
        return handleDenied(() => post(url, data));
      }
      return result;
    });
  return response;
};

const get = async (url: string, data: any = null) => {
  try {
    const token = await getAccessToken();
    console.log('token: ', token);
    const headers = token
      ? {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          'Content-Type': 'application/json',
        };

    console.log(`${API_URL}${url}${data ? '?' : ''}${qs.stringify(data)}`);
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
        if (result.status === 0 && result.error === 'access_denied') {
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

  let response = await fetch(API_URL + url, {
    method: 'POST',
    body: formData,
    headers: headers,
  })
    .then(payload => {
      return payload.json();
    })
    .then(result => {
      console.log('Media Upload Result: ', result);
      if (result.status === 0 && result.error === 'access_denied') {
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

const handleDenied = (callback: () => any) => {
  return refresh().then(response => {
    if (response.result) {
      return callback();
    }
  });
};

export type RefreshResponse = {
  user_id: string;
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

const refresh: () => Promise<PublicAPIResponse<RefreshResponse>> = async () => {
  const token = await getAccessToken();
  const refresh_token = await getRefreshToken();

  const request: RefreshRequest = {
    token,
    refresh_token,
  };

  const response = await Api.post('/refresh', request);
  return response;
};

const Api = {
  post,
  get,
  postWithForm,
};

export default Api;
