/**
 * Created by hyx on 2017/10/6.
 */

import React from 'react';
import styles from './css/SignUpPage.css';
import imgLogo from '../assets/graphics/logo.png';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Image} from 'semantic-ui-react';
import {Layout, img} from 'antd';


const {Content} = Layout;

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

const window_height = document.documentElement.clientHeight;
const window_width = document.documentElement.clientWidth;
const bg_width = window_width / 1500 * 600; //背景图中拼图在页面中显示的宽度
const register_form_width = 400; //注册表单的宽度，规定在SignUpPage.css文件中
const register_form_height = 465; //注册表单的高度，规定在SignUpPage.css文件中

class SignUpPage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {

    return (
      <Layout>
        <Content className={styles.mainContent} style={{height: window_height}}>

          <div className={styles.sign_up_form}
               style={{
                 marginRight: (window_width - bg_width - register_form_width)/2,
                 paddingTop: (window_height - register_form_height)/2
               }}>

            <div className={styles.logo_div}>
              <img src={imgLogo} className={styles.img_logo}/>
            </div>
            <div className={styles.title}>
              Join
            </div>
            <TextField
              hintText="e.g. 123@gmail.com"
              floatingLabelText="Email address"
              fullWidth={true}
              underlineStyle={material_styles.underlineStyle}
              floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}
              underlineFocusStyle={material_styles.underlineFocusStyle}
            /><br />
            <TextField
              hintText="only letters, numbers, and underscores"
              floatingLabelText="Username"
              fullWidth={true}
              underlineStyle={material_styles.underlineStyle}
              floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}
              underlineFocusStyle={material_styles.underlineFocusStyle}
            /><br />
            <TextField
              hintText="min. 6 char"
              floatingLabelText="Password"
              type="password"
              fullWidth={true}
              underlineStyle={material_styles.underlineStyle}
              floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}
              underlineFocusStyle={material_styles.underlineFocusStyle}
            /><br />
            <FlatButton
              label="Join"
              fullWidth={true}
              backgroundColor="#000000"
              hoverColor="#245168"
              labelStyle={material_styles.buttonColorStyle}
              style={{marginTop: 20}}
            /><br />
            <div className={styles.terms}>
              By joining, you agree to the <a className={styles.link}>Terms</a> and <a className={styles.link}>Privacy
              Policy</a>.
            </div>
          </div>

        </Content>
      </Layout>
    );
  }
}

SignUpPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default SignUpPage;
