import AsyncStorage from '@react-native-async-storage/async-storage';
const qs = require('qs');

// const API_URL = 'https://api.mentorbaik.com';
const API_URL = '';

const post = async (url: string, data: any) => {
  const token = await AsyncStorage.getItem('token');
  console.log(token);
  const headers = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    : {
        'Content-Type': 'application/json',
      };

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
        // return this.handleDenied(withToken).then(responseAfterDenied => {
        //   if (responseAfterDenied.status === 1) {
        //     return this.post(url, data, withToken);
        //   }
        // });
      }
      return result;
    });
  return response;
};

const get = async (url: string, data: any = null) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const headers = token
      ? {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        }
      : {
          'Content-Type': 'application/json',
        };

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
          // return this.handleDenied(withToken).then(responseAfterDenied => {
          //   if (responseAfterDenied.status === 1) {
          //     return this.get(url, data, withToken);
          //   }
          // });
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

const Api = {
  post,
  get,
};

export default Api;
