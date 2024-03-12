import { launchImageLibrary } from 'react-native-image-picker';

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
  return `Rp${price.toLocaleString('id-ID')}`;
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

          if (attachment.size > 0) {
            // On Success
            onSuccess(attachment);
            // showLoading();
            // uploadImage(attachment, navigation)
            //   .then(payload => {
            //     closeLoading();
            //     console.log('Ini payload dari uploadImage', payload);
            //     if (payload.file_url !== undefined) {
            //       addImage(payload.file_url);
            //       setSnackbar(true);
            //       setSnackbarText('Image successfully attached.');
            //       setIsSnackbarError(false);
            //     } else {
            //       setSnackbar(true);
            //       setSnackbarText('Image failed to attach.');
            //       setIsSnackbarError(true);
            //     }
            //   })
            //   .catch(e => {
            //     console.log('Ini failednya: ', e);
            //     closeLoading();
            //     setSnackbar(true);
            //     setSnackbarText(
            //       "Sorry, there's something wrong when attaching image.",
            //     );
            //     setIsSnackbarError(true);
            //   });
          } else {
            // Handle fail
            // setSnackbar(true);
            // setSnackbarText("Sorry, this image can't be attached");
            // setIsSnackbarError(true);
          }
        }
      },
    );
  } catch (err) {
    console.log('Error Image Picker: ' + err);
  }
};

const Utils = {
  groupBy,
  getPriceString,
  openGallery,
};

export default Utils;
