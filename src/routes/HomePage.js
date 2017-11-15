/**
 * Created by hyx on 2017/10/5.
 */
import React from 'react';
import styles from './css/HomePage.css';

import {Layout} from 'antd';
import {Link} from 'dva/router';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu/IconMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import DehazeIcon from 'material-ui/svg-icons/image/dehaze';
import {GridList} from 'material-ui/GridList';
import Dialog, {DialogActions, DialogContent} from 'material-ui-next/Dialog';
import FlatButton from 'material-ui/FlatButton';

import LoginForm from '../components/LoginForm';

const {Content} = Layout;
// 使用document.body.clientHeight可能会导致高度为0，改用document.documentElement.clientHeight
const window_height = document.documentElement.clientHeight;

const material_styles = {
  flatButtonLabelStyle: {
    // color: '#245168',
    color: '#00897b',
  }
};

class HomePage extends React.Component {

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

    return (
      <Layout style={{height: '100%'}}>
        <Content className={styles.mainContent}>
          <div className={styles.root}>
            <GridList className={styles.gridList} cols={2}>
              <div className={styles.menuPic}/>
              <IconMenu
                iconButtonElement={<IconButton><DehazeIcon/></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <Link to="/homepage"><MenuItem primaryText="Home"/></Link>
                <Link to="/gallery/photo"><MenuItem primaryText="Gallery"/></Link>
                <MenuItem primaryText="Login" onClick={this.handleOpen}/>
                <Link to="/sign-up"><MenuItem primaryText="Join"/></Link>
              </IconMenu>
            </GridList>
          </div>

          <Dialog
            open={this.state.open}
          >
            <DialogContent
              maxWidth="sm"
              fullWidth
            >
              <LoginForm/>
            </DialogContent>
            <DialogActions>
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
                labelStyle={material_styles.flatButtonLabelStyle}
              />
            </DialogActions>
          </Dialog>
        </Content>
      </Layout>
    );
  }
}

HomePage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default HomePage;
