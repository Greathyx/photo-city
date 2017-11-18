/**
 * Created by hyx on 2017/10/17.
 */

import request from '../utils/request';


export async function upload(param) {

  const formData = new FormData();
  formData.append('userId', param.userId);
  formData.append('tags', param.tags);
  formData.append('photos', param.photos);
  formData.append('description', param.description);

  return request('/uploadPhotos', {
    method: 'POST',
    body: formData
  })

}
