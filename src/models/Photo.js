/**
 * Created by hyx on 2017/10/17.
 */

import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {uploadPhoto, uploadPost} from "../services/PhotoService";


export default {

  namespace: 'photo',

  state: {
    showUploadForm: false
  },

  subscriptions: {

  },

  effects: {

    * upload({payload}, {call, put, select}) {

      const post = {
        description: payload.description,
        authorId: payload.authorId,
      };
      // 先在数据库中动态表中创建新的动态项，获取post的id
      const data = yield call(uploadPost, post);

      if (data.message === 'error') {
        message.error('upload post error');
      }
      // 再上传图片
      else {
        const postId = data.postId;
        let isSuccess = true;

        for (let i =0; i< payload.photoList.length; i++) {
          const photo = {
            pid: payload.photoList[i].pid,
            origin: payload.photoList[i].origin,
            sImg: payload.photoList[i].sImg,
            bImg: payload.photoList[i].bImg,
            tags: payload.photoList[i].tags,
            postId: postId,
            authorId: payload.photoList[i].authorId,
          };

          // 因为antd的upload组件是一张张传的，所以将图片一张张写入数据库
          const data2 = yield call(uploadPhoto, photo);
          if (data2.message === 'error') {
            isSuccess = false;
            break;
          }
        }

        if (isSuccess){
          yield put({
            type: 'updateShowUploadForm',
            payload: {showUploadForm: false},
          });
          message.success('Upload successfully!');
        }
        else {
          message.error('upload photo error');
        }
      }
    },

  },

  reducers: {

    updateShowUploadForm(state, action) {
      return {
        ...state,
        showUploadForm: action.payload.showUploadForm,
      }
    },

  }

}
