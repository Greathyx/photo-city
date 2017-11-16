/**
 * Created by hyx on 2017/10/5.
 */
import React from 'react';
import styles from './css/HomePage.css';

import {Layout} from 'antd';
import {Link} from 'dva/router';
import {connect} from 'dva';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu/IconMenu';
import MenuItem from 'material-ui/MenuItem/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import DehazeIcon from 'material-ui/svg-icons/image/dehaze';
import {GridList} from 'material-ui/GridList';
import Dialog, {DialogActions, DialogContent} from 'material-ui-next/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Favourite from 'material-ui/svg-icons/action/favorite-border';
import Homepage from 'material-ui/svg-icons/content/send';
import Following from 'material-ui/svg-icons/social/person';
import Follower from 'material-ui/svg-icons/social/person-outline';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import LoginForm from '../components/LoginForm';
import imgPortrait from '../assets/graphics/portrait.jpg';


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

  constructor(props) {
    super(props);
    this.state = {
      // open: false,
      openUserDrawer: false,
    };
  }

  // componentWillMount(){
  //   console.log(this.props.authentication.hasLoggedIn)
  // }

  // 打开登陆面板监听
  handleOpen = () => {
    // this.setState({open: true});
    this.props.dispatch({
      type: 'authentication/updateShowLoginForm',
      payload: {showLoginForm: true}
    });
  };

  // 关闭登陆面板监听
  handleClose = () => {
    // this.setState({open: false});
    this.props.dispatch({
      type: 'authentication/updateShowLoginForm',
      payload: {showLoginForm: false}
    });
  };

  handleToggleUserDrawer = () => this.setState({openUserDrawer: !this.state.openUserDrawer});

  handleCloseUserDrawer = () => this.setState({openUserDrawer: false});

  handleLogout = () => {
    this.props.dispatch({
      type: 'authentication/logout',
    });
  };

  render() {

    return (
      <Layout style={{height: '100%'}}>
        <Content className={styles.mainContent}>
          <div className={styles.root}>
            <GridList className={styles.gridList} cols={2}>
              <div className={styles.menuPic}/>
              {
                this.props.authentication.hasLoggedIn ?
                  <IconMenu
                    iconButtonElement={<IconButton><DehazeIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <Link to="/gallery/photo"><MenuItem primaryText="Gallery"/></Link>
                    <MenuItem primaryText="User" onClick={this.handleToggleUserDrawer}/>
                    <MenuItem primaryText="Logout" onClick={this.handleLogout}/>
                  </IconMenu>
                  :
                  <IconMenu
                    iconButtonElement={<IconButton><DehazeIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <Link to="/gallery/photo"><MenuItem primaryText="Gallery"/></Link>
                    <MenuItem primaryText="Login" onClick={this.handleOpen}/>
                    <Link to="/sign-up"><MenuItem primaryText="Join"/></Link>
                  </IconMenu>
              }
            </GridList>
          </div>

          {/**
           用户抽屉，用于管理个人信息
           */}
          <Drawer
            width={300}
            openSecondary={true}
            open={this.state.openUserDrawer}
            onRequestChange={(openUserDrawer) => this.setState({openUserDrawer})}
            style={{zIndex: 101}}
          >
            <IconButton onClick={this.handleCloseUserDrawer}>
              <ChevronRightIcon/>
            </IconButton>
            <Divider/>

            <GridList
              cols={2}
              style={{width: 260, height: 80, marginTop: 20, marginLeft: 20, marginBottom: 6}}
            >
              <Avatar src={imgPortrait} size={80}/>
              <div style={{marginLeft: -32, marginTop: 8}}>
                <p style={{fontSize: 20, wordBreak: 'break-all', lineHeight: 1, marginBottom: 12}}>Sherley Huang</p>
                <p style={{fontSize: 13, wordBreak: 'break-all', lineHeight: 1}}>151250064@smail.nju.edu.cn</p>
              </div>
            </GridList>

            <List>
              <Link to="/gallery/userHome" onClick={this.handleCloseUserDrawer}>
                <ListItem primaryText="Homepage" leftIcon={<Homepage/>}/>
              </Link>
              <ListItem primaryText="Favourite" leftIcon={<Favourite/>}/>
              <ListItem
                primaryText="Following"
                leftIcon={<Following/>}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Gakki"
                  />,
                  <ListItem
                    key={2}
                    primaryText="Tom Holland"
                  />,
                ]}
              />
              <ListItem
                primaryText="Follower"
                leftIcon={<Follower/>}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Person1"
                  />,
                  <ListItem
                    key={2}
                    primaryText="Person2"
                  />,
                  <ListItem
                    key={3}
                    primaryText="Person3"
                  />,
                ]}
              />
            </List>
          </Drawer>

          <Dialog
            open={this.props.authentication.showLoginForm}
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

function mapStateToProps({authentication}) {
  return {
    authentication,
  };
}

export default connect(mapStateToProps)(HomePage);
