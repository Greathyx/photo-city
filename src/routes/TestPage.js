/**
 * Created by hyx on 2017/10/10.
 */

import React from 'react';
import {connect} from 'dva';
import styles from './css/TestPage.css';
import {Layout, Header, Navigation, Content, Textfield} from 'react-mdl';
import {Link} from 'dva/router';
import {img} from 'antd';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import imgLogo from '../assets/graphics/logo_small.png';
import LoginForm from '../components/LoginForm';


const material_styles = {
  flatButtonLabelStyle: {
    color: '#245168',
  },
  dialogStyle: {
    width: 600
  }
};

class GalleryPage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
        labelStyle={material_styles.flatButtonLabelStyle}
      />
    ];

    return (
      <Layout fixedHeader>
        <Header seamed
                title={<span><img src={imgLogo} className={styles.logo}/><span
                  className={styles.title}>Photo City</span></span>}
                className={styles.header}>
          <Navigation>
            <Link to="/homepage"><span className={styles.link}>Home</span></Link>
            <Link><span onClick={this.handleOpen} className={styles.link}>Login</span></Link>
            <Link to="/sign-up"><span className={styles.link}>Join</span></Link>
          </Navigation>
        </Header>

        <Content>
          <div style={{height: 1200}}>hello</div>
        </Content>

        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={material_styles.dialogStyle}
        >
          <LoginForm/>
        </Dialog>
      </Layout>
    );
  }
}

GalleryPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default GalleryPage;
