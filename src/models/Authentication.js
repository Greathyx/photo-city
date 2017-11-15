/**
 * Created by hyx on 2017/10/15.
 */

import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {register, login} from "../services/UserService";

export default {

  namespace: 'authentication',

  state: {
    username: null,
    email: null
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        if (pathToRegexp('/gallery/photo').exec(location.pathname)) {
          document.title = 'PhotoCity-PhotoWall';
        }
        else if (pathToRegexp('/gallery/video').exec(location.pathname)) {
          document.title = 'PhotoCity-VideoWall';
        }
        else if (pathToRegexp('/gallery/tag=:tag').exec(location.pathname)) {
          document.title = 'PhotoCity-Classification';
        }
        else if (pathToRegexp('/gallery/userHome').exec(location.pathname)) {
          document.title = 'PhotoCity-UserHome';
        }
        else if (pathToRegexp('/sign-up').exec(location.pathname)) {
          document.title = 'PhotoCity-SignUp';
        }
        else if (pathToRegexp('/gallery').exec(location.pathname)) {
          document.title = 'PhotoCity-Gallery';
        }
        else if (pathToRegexp('/homepage').exec(location.pathname)) {
          document.title = 'PhotoCity-Homepage';
        }
        else if (pathToRegexp('/').exec(location.pathname)) {
          document.title = 'PhotoCity-Homepage';
        }
        else {
          document.title = 'Not found';
        }
      });

      const username = sessionStorage.getItem('username');
      const email = sessionStorage.getItem('email');

      if (username && username !== undefined) {
        dispatch({
          type: 'updateUsername',
          payload: {username: username},
        });
      }

      if (email && email !== undefined) {
        dispatch({
          type: 'updateEmail',
          payload: {email: email},
        });
      }
    },
  },

  effects: {

    // 登陆
    * login({payload}, {call, put, select}) {

      const data = yield call(login, payload);

      if (data.message === 'success') {

        // 判断登录名是否为email
        var Regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
        if (Regex.test(payload.username)){
          sessionStorage.setItem('email', payload.username);
          yield put({
            type: 'updateEmail',
            payload: {username: payload.username},
          });
          // todo
        }
        else {
          sessionStorage.setItem('username', payload.username);
          yield put({
            type: 'updateUsername',
            payload: {username: payload.username},
          });
          // todo
        }
        message.success('Login success!');
        // location.reload()
      }
      else if (data.message === 'passwordErr') {
        message.error('password error!');
      }
      else if (data.message === 'noUser') {
        message.error('no user!')
      }
      else {
        message.error('Login error!')
      }
    },

    // 注册
    * register({payload}, {call, put, select}) {

      const data = yield call(register, payload);

      if (data.message === 'success') {

        yield put({
          type: 'updateUsername',
          payload: {username: payload.username},
        });

        yield put({
          type: 'updateEmail',
          payload: {email: payload.email},
        });

        message.success('Register success!')
      }
      else if (data.message === 'occupied_username') {
        message.error('username occupied!')
      }
      else if (data.message === 'occupied_email') {
        message.error('email occupied!')
      }
      else {
        message.error(data.message)
      }
    }
  },

  reducers:{

    updateUsername(state, action){
      return {
        ...state,
        username: action.payload.username,
      }
    },

    updateEmail(state, action){
      return {
        ...state,
        email: action.payload.email
      }
    }
  }

}
