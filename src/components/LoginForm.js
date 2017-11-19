/**
 * Created by hyx on 2017/10/9.
 */

import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import styles from './css/LoginForm.css';
import imgLogo from '../assets/graphics/logo.png';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Snackbar from 'material-ui-next/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import {message} from 'antd';


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
    // borderColor: '#245168',
    borderColor: '#00897b',
  },
  floatingLabelStyle: {
    color: '#333333',
  },
  floatingLabelFocusStyle: {
    // color: '#245168',
    color: '#00897b',
  },
  buttonColorStyle: {
    color: '#ffffff',
  }
};


class LoginForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  state = {
    openSnackBar: false,
    hint: ''
  };

  handleRequestCloseSnackBar = () => {
    this.setState({openSnackBar: false});
  };

  // 登陆按钮监听
  handleLogin = () => {
    let loginName = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log(loginName);

    if (loginName === '') {
      // this.setState({
      //   openSnackBar: true,
      //   hint: 'Please type in your username or email.',
      // });
      message.error('Please type in your username or email.');
    }

    else if (password === '') {
      // this.setState({
      //   openSnackBar: true,
      //   hint: 'Please type in your password.',
      // });
      message.error('Please type in your password.');
    }

    else {
      const param = {
        username: loginName,
        password: password,
      };

      this.props.dispatch({
        type: 'authentication/login',
        payload: {
          ...param,
        },
      });
    }
  };

  render() {

    const {openSnackBar, hint} = this.state;

    return (
      <div className={styles.login_form}>
        <div className={styles.logo_div}>
          <img
            src={imgLogo}
            className="responsive-img"
            style={{maxWidth: 176, maxHeight: 95, marginLeft: 3}}/>
        </div>
        <div className={styles.title}>
          Login
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="username" type="text" className="validate"/>
            <label htmlFor="username">Username / Email</label>
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
          onClick={this.handleLogin}
        /><br/>

        <div className={styles.join}>
          Don't have an account? <Link to="/sign-up"><span className={styles.link}>Join</span></Link>
        </div>

        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={openSnackBar}
          onRequestClose={this.handleRequestCloseSnackBar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{hint}</span>}
        />
      </div>
    );
  }
}

LoginForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

function mapStateToProps({authentication}) {
  return {
    authentication,
  };
}

export default connect(mapStateToProps)(LoginForm);
