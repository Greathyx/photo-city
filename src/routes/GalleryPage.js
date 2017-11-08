import React from 'react';
import styles from './css/GalleryPage.css';
import {Link} from 'dva/router';
import {img} from 'antd';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import Dialog from 'material-ui/Dialog';
import Dialog, {
  DialogActions,
  DialogContent,
} from 'material-ui-next/Dialog';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {GridList} from 'material-ui/GridList';
import DehazeIcon from 'material-ui/svg-icons/image/dehaze';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Photo from 'material-ui/svg-icons/image/camera-alt';
import Video from 'material-ui/svg-icons/image/movie-creation';
import Login from 'material-ui/svg-icons/action/supervisor-account';
import Join from 'material-ui/svg-icons/action/loyalty';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Favourite from 'material-ui/svg-icons/action/favorite-border';
import Homepage from 'material-ui/svg-icons/content/send';
import Following from 'material-ui/svg-icons/social/person';
import Follower from 'material-ui/svg-icons/social/person-outline';

import imgLogo from '../assets/graphics/logo_small.png';
import imgPortrait from '../assets/graphics/portrait.jpg';
import LoginForm from '../components/LoginForm';


const material_styles = {
  flatButtonLabelStyle: {
    // color: '#245168',
    color: '#00897b',
  },
  dialogStyle: {
    width: 600,
    maxWidth: 'none',
  },
  navLabelStyle: {
    fontWeight: 400
  }
};


class GalleryPage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      openLoginForm: false,
      openDrawer: false,
      openUserDrawer: false,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  handleToggleDrawer = () => this.setState({openDrawer: !this.state.openDrawer});

  handleCloseDrawer = () => this.setState({openDrawer: false});

  handleToggleUserDrawer = () => this.setState({openUserDrawer: !this.state.openUserDrawer});

  handleCloseUserDrawer = () => this.setState({openUserDrawer: false});

  handleOpenLoginForm = () => {
    this.setState({openLoginForm: true});
    this.handleCloseDrawer();
  };

  handleCloseLoginForm = () => {
    this.setState({openLoginForm: false});
  };

  // 实现屏幕放大，抽屉自动合上
  handleResize(e) {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
    if (this.state.windowWidth > 992) {
      this.handleCloseDrawer();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', ::this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.handleResize)
  }

  render() {

    return (
      <div className="col s12 m12 l12 navbar-fixed">
        <nav className={styles.header + " " + "nav-extended"} style={{zIndex: 100}}>
          <div className="nav-wrapper">
            <span className="brand-logo" style={{marginLeft: 20}}>
              <img src={imgLogo} className={styles.logo}/>
            </span>
            <a onClick={this.handleToggleDrawer} className="button-collapse">
              <DehazeIcon className={styles.menuIcon}/>
            </a>

            <GridList
              id="nav-mobile"
              className="right hide-on-med-and-down"
              cols={4}
              style={{height: 64, marginRight: 20}}
            >
              <Link to="/homepage">
                <FlatButton label="Home" labelStyle={material_styles.navLabelStyle}/>
              </Link>
              <Link to="/gallery/photo">
                <FlatButton label="Photos" labelStyle={material_styles.navLabelStyle}/>
              </Link>
              {/*<Link to="/gallery/video">*/}
              {/*<FlatButton label="Videos" labelStyle={material_styles.navLabelStyle}/>*/}
              {/*</Link>*/}
              <Link onClick={this.handleOpenLoginForm}>
                <FlatButton label="Login" labelStyle={material_styles.navLabelStyle}/>
              </Link>
              {/*<Link to="/sign-up">*/}
              {/*<FlatButton label="Join" labelStyle={material_styles.navLabelStyle}/>*/}
              {/*</Link>*/}
              <Link onClick={this.handleToggleUserDrawer}>
                <FlatButton label="User" labelStyle={material_styles.navLabelStyle}/>
              </Link>
            </GridList>
          </div>
        </nav>

        <div className="row">
          {React.cloneElement(this.props.children)}
        </div>

        {/**
         小屏导航栏
         */}
        <Drawer
          docked={false}
          width={180}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
          style={{zIndex: 102}}
        >
          <Link to="/homepage"><MenuItem leftIcon={<Home/>}>Home</MenuItem></Link>
          <Link to="/gallery/photo"><MenuItem leftIcon={<Photo/>}>Photos</MenuItem></Link>
          <Link to="/gallery/video"><MenuItem leftIcon={<Video/>}>Videos</MenuItem></Link>
          <Divider style={{marginLeft: 15}}/>
          <MenuItem onClick={this.handleOpenLoginForm} leftIcon={<Login/>}>Login</MenuItem>
          <Link to="/sign-up"><MenuItem leftIcon={<Join/>}>Join</MenuItem></Link>
        </Drawer>

        {/**
         用户抽屉，用于管理个人信息
         */}
        <Drawer
          width={300}
          /*className="col s6 m4 l3"*/
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
          open={this.state.openLoginForm}
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
              onClick={this.handleCloseLoginForm}
              labelStyle={material_styles.flatButtonLabelStyle}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

GalleryPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default GalleryPage;
