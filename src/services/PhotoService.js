/**
 * Created by hyx on 2017/10/17.
 */

import request from '../utils/request';


export async function uploadPhoto(param) {

  // console.log(param);

  const formData = new FormData();
  formData.append('pid', param.pid);
  formData.append('origin', param.origin);
  formData.append('sImg', param.sImg);
  formData.append('bImg', param.bImg);
  formData.append('tags', param.tags);
  formData.append('postId', param.postId);
  formData.append('authorId', param.authorId);

  return request('/uploadPhoto', {
    method: 'POST',
    body: formData
  })

}


export async function uploadPost(param) {

  const formData = new FormData();
  // formData.append('photos', param.photos);
  formData.append('description', param.description);
  formData.append('authorId', param.authorId);

  return request('/uploadPost', {
    method: 'POST',
    body: formData
  })

}
