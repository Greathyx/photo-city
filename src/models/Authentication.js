/**
 * Created by hyx on 2017/10/15.
 */

import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {register, login, logout} from "../services/UserService";

export default {

  namespace: 'authentication',

  state: {
    username: null,
    email: null,
    hasLoggedIn: false,
    showLoginForm: false
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
      const hasLoggedIn = sessionStorage.getItem('hasLoggedIn');

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

      if ( hasLoggedIn !== undefined) {
        dispatch({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: hasLoggedIn}
        })
      }

    },
  },

  effects: {

    // 登陆
    * login({payload}, {call, put, select}) {

      const data = yield call(login, payload);
      // console.log(data);

      if (data.message === 'success') {

        // 判断登录名是否为email
        const Regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;

        if (Regex.test(payload.username)) {

          sessionStorage.setItem('email', payload.username);
          sessionStorage.setItem('username', data.user.username);

          yield put({
            type: 'updateEmail',
            payload: {email: payload.username},
          });

          yield put({
            type: 'updateUsername',
            payload: {username: data.user.username},
          });
        }
        else {

          sessionStorage.setItem('username', payload.username);
          sessionStorage.setItem('email', data.user.email);

          yield put({
            type: 'updateUsername',
            payload: {username: payload.username},
          });

          yield put({
            type: 'updateEmail',
            payload: {email: data.user.email},
          });

        }

        yield put({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: true}
        });

        yield put({
          type: 'updateShowLoginForm',
          payload: {showLoginForm: false}
        });

        sessionStorage.setItem('hasLoggedIn', true);
        message.success('Login successfully!');
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

        sessionStorage.setItem('username', payload.username);
        sessionStorage.setItem('email', payload.email);

        yield put({
          type: 'updateUsername',
          payload: {username: payload.username},
        });

        yield put({
          type: 'updateEmail',
          payload: {email: payload.email},
        });

        message.success('Register successfully!')
      }
      else if (data.message === 'occupied_username') {
        message.error('Username occupied!')
      }
      else if (data.message === 'occupied_email') {
        message.error('Email occupied!')
      }
      else {
        message.error(data.message)
      }
    },

    // 登出
    * logout({payload}, {call, put, select}) {
      const data = yield call(logout);
      if (!data.auth) {
        sessionStorage.setItem('hasLoggedIn', false);

        yield put({
          type: 'updateHasLoggedIn',
          payload: {hasLoggedIn: false}
        });

        message.success('Logout successfully!')

      }
      else {
        message.error('Logout error!')
      }
    }
  },

  reducers: {

    updateUsername(state, action) {
      return {
        ...state,
        username: action.payload.username,
      }
    },

    updateEmail(state, action) {
      return {
        ...state,
        email: action.payload.email
      }
    },

    updateHasLoggedIn(state, action) {
      return {
        ...state,
        hasLoggedIn: action.payload.hasLoggedIn,
      }
    },

    updateShowLoginForm(state, action) {
      return {
        ...state,
        showLoginForm: action.payload.showLoginForm,
      }
    },
  }

}
