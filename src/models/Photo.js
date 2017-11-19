/**
 * Created by hyx on 2017/10/17.
 */

import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {uploadPhoto, uploadPost} from "../services/PhotoService";


export default {

  namespace: 'photo',

  state: {
    postId: null,
    showUploadForm: false
  },

  subscriptions: {
    // setup({dispatch, history}) {
    //   history.listen((location) => {
    //     if (pathToRegexp('/gallery/photo').exec(location.pathname)) {
    //       document.title = 'PhotoCity-PhotoWall';
    //     }
    //     else if (pathToRegexp('/gallery/video').exec(location.pathname)) {
    //       document.title = 'PhotoCity-VideoWall';
    //     }
    //     else if (pathToRegexp('/gallery/tag=:tag').exec(location.pathname)) {
    //       document.title = 'PhotoCity-Classification';
    //     }
    //     else if (pathToRegexp('/gallery/userHome').exec(location.pathname)) {
    //       document.title = 'PhotoCity-UserHome';
    //     }
    //     else if (pathToRegexp('/sign-up').exec(location.pathname)) {
    //       document.title = 'PhotoCity-SignUp';
    //     }
    //     else if (pathToRegexp('/gallery').exec(location.pathname)) {
    //       document.title = 'PhotoCity-Gallery';
    //     }
    //     else if (pathToRegexp('/homepage').exec(location.pathname)) {
    //       document.title = 'PhotoCity-Homepage';
    //     }
    //     else if (pathToRegexp('/').exec(location.pathname)) {
    //       document.title = 'PhotoCity-Homepage';
    //     }
    //     else {
    //       document.title = 'Not found';
    //     }
    //   });
    //
    // },
  },

  effects: {

    // 上传单张图片
    * uploadPhoto({payload}, {call, put, select}) {

      const data = yield call(uploadPhoto, payload);
      if (data.message === 'error') {
        message.error('upload photo error');
      }
      console.log(data.message);

    },

    // 发布新动态
    * uploadPost({payload}, {call, put, select}) {

      const data = yield call(uploadPost, payload);
      if (data.message === 'error') {
        message.error('upload post error');
      }
      else {
        console.log(data.postId);

        yield put({
          type: 'updatePostId',
          payload: {postId: data.postId}
        });
        // return data.postId;
      }
    }

  },

  reducers: {

    updatePostId(state, action) {
      return {
        ...state,
        postId: action.payload.postId,
      }
    },

    updateShowUploadForm(state, action) {
      return {
        ...state,
        showUploadForm: action.payload.showUploadForm,
      }
    },

  }

}
