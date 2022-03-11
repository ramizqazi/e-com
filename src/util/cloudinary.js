import Axios from 'axios';

const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dreamslab/image/upload';

const onSuccess = response => {
  return response.data.secure_url;
};

const onError = error => {
  // console.debug('Request Failed:', error.config);
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    // console.debug('Status:', error.response.status);
    // console.debug('Data:', error.response.data);
  } else {
    // Something else happened while setting up the request
    // triggered the error
    // console.debug('Error Message:', error.message);
  }
  return Promise.reject(error.response ? error.response.data : error);
};

export const uploadAvatar = async (photo, onUploadProgress) => {
  const data = new FormData();
  data.append('file', photo);
  data.append('folder', 'avatars');
  data.append('upload_preset', 'ua2rrjz0');
  data.append('cloud_name', 'dreamslab');

  return Axios.post(UPLOAD_URL, data, {
    onUploadProgress:
      typeof onUploadProgress === 'function'
        ? progressEvent =>
            onUploadProgress(
              Math.round(progressEvent.loaded / progressEvent.total),
            )
        : undefined,
  })
    .then(onSuccess)
    .catch(onError);
};
