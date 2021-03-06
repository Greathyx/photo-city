/**
 * Created by hyx on 2017/10/15.
 */

import request from '../utils/request';


/**
 *
 * 注册
 *
 * param:{
 *      username: string
 *      password: string
 *      email: string
 * }
 *
 */
export async function register(param) {

  const formData = new FormData();
  formData.append('username', param.username);
  formData.append('password', param.password);
  formData.append('email', param.email);

  return request('/register', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 登陆
 *
 * you can login with username or email
 *
 * param:{
 *      loginName:string (username or email)
 *      password:string
 * }
 *
 */
export async function login(param) {

  const formData = new FormData();
  formData.append('username', param.username);
  formData.append('password', param.password);

  return request('/login', {
    method: 'POST',
    body: formData
  })

}

/**
 *
 * 登出
 *
 * @returns {Promise.<Object>}
 */
export async function logout() {

  return request('/logout', {
    method: 'GET',
  })

}
