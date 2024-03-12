import Api from 'network/Api';

const uploadImageEndpoint = '/media/upload';

const uploadImage = async (request: any) => {
  const response = await Api.upload(uploadImageEndpoint, request);

  return response;
};

export default uploadImage;
