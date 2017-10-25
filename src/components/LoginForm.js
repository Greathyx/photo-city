/**
 * Created by hyx on 2017/10/9.
 */

import React from 'react';
import {Link} from 'dva/router';
import styles from './css/LoginForm.css';
import imgLogo from '../assets/graphics/logo.png';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {img} from 'antd';


const material_styles = {
  hintStyle: {
    color: '#666666',
  },
  errorStyle: {
    color: '',
  },
  underlineStyle: {
    borderColor: '#666666',
  },
  underlineFocusStyle: {
    borderColor: '#245168',
  },
  floatingLabelStyle: {
    color: '#333333',
  },
  floatingLabelFocusStyle: {
    color: '#245168',
  },
  buttonColorStyle: {
    color: '#ffffff',
  }
};

class LoginForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {

    return (
      <div className={styles.login_form}>
        <div className={styles.logo_div}>
          <img src={imgLogo} className={styles.img_logo}/>
        </div>
        <div className={styles.title}>
          Login
        </div>
        {/*<TextField*/}
        {/*//hintText="e.g. 123@gmail.com"*/}
        {/*floatingLabelText="Email address"*/}
        {/*fullWidth={true}*/}
        {/*underlineStyle={material_styles.underlineStyle}*/}
        {/*floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}*/}
        {/*underlineFocusStyle={material_styles.underlineFocusStyle}*/}
        {/*/><br />*/}

        {/*<TextField*/}
        {/*//hintText="min. 6 char"*/}
        {/*floatingLabelText="Password"*/}
        {/*type="password"*/}
        {/*fullWidth={true}*/}
        {/*underlineStyle={material_styles.underlineStyle}*/}
        {/*floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}*/}
        {/*underlineFocusStyle={material_styles.underlineFocusStyle}*/}
        {/*/><br />*/}

        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <FlatButton
          label="Login"
          fullWidth={true}
          backgroundColor="#000000"
          hoverColor="#00897b"
          labelStyle={material_styles.buttonColorStyle}
          style={{marginTop: 20}}
        /><br />
        <div className={styles.join}>
          Don't have an account? <Link to="/sign-up"><span className={styles.link}>Join</span></Link>
        </div>
      </div>
    );
  }
}

LoginForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default LoginForm;
