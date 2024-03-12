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

const upload = async (url: string, data: any) => {
  const token = await AsyncStorage.getItem('token');
  const headers = token
    ? {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      }
    : {
        'Content-Type': 'multipart/form-data',
      };

  const formData = new FormData();
  // for (let k in data) {
  //   formData.append(k, data[k]);
  // }

  formData.append('file', {
    name: data.name,
    type: data.type !== null ? data.type : 'video/mp4',
    uri: data.uri,
  });

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
        // return this.handleDenied(withToken).then(responseAfterDenied => {
        //   if (responseAfterDenied.status === 1) {
        //     return this.upload(url, data, withToken);
        //   }
        // });
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

const Api = {
  post,
  get,
  upload,
};

export default Api;
