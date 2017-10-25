import React from 'react';
import {connect} from 'dva';
import styles from './css/GalleryPage.css';
import {Link} from 'dva/router';
import {img} from 'antd';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DehazeIcon from 'material-ui/svg-icons/image/dehaze';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Photo from 'material-ui/svg-icons/image/camera-alt';
import Video from 'material-ui/svg-icons/image/movie-creation';
import Login from 'material-ui/svg-icons/action/supervisor-account';
import Join from 'material-ui/svg-icons/action/loyalty';

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

  constructor(props) {
    super(props);
    this.state = {
      openLoginForm: false,
      openDrawer: false,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  handleToggleDrawer = () => this.setState({openDrawer: !this.state.openDrawer});

  handleCloseDrawer = () => this.setState({openDrawer: false});

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
    if(this.state.windowWidth > 992){
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseLoginForm}
        labelStyle={material_styles.flatButtonLabelStyle}
      />
    ];

    return (
      <div className="col s12 m12 l12 navbar-fixed">
        <nav className={styles.header + " " + "nav-extended"}>
          <div className="nav-wrapper">
            <span className="brand-logo">
              <img src={imgLogo} className={styles.logo}/>
              {/*<span className={styles.title}>Photo City</span>*/}
            </span>
            <a onClick={this.handleToggleDrawer} className="button-collapse">
              <DehazeIcon className={styles.menuIcon}/>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/homepage" className={styles.link}>Home</Link></li>
              <li><Link to="/gallery/photo" className={styles.link}>Photos</Link></li>
              <li><Link to="/gallery/video" className={styles.link}>Videos</Link></li>
              <li><Link onClick={this.handleOpenLoginForm} className={styles.link}>Login</Link></li>
              <li><Link to="/sign-up" className={styles.link}>Join</Link></li>
            </ul>
          </div>
        </nav>

        <div className="row">
          {React.cloneElement(this.props.children)}
        </div>

        <Drawer
          docked={false}
          width={180}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
        >
          <Link to="/homepage"><MenuItem leftIcon={<Home />}>Home</MenuItem></Link>
          <Link to="/gallery/photo"><MenuItem leftIcon={<Photo />}>Photos</MenuItem></Link>
          <Link to="/gallery/video"><MenuItem leftIcon={<Video />}>Videos</MenuItem></Link>
          <Divider style={{marginLeft: 15}} />
          <MenuItem onClick={this.handleOpenLoginForm} leftIcon={<Login />}>Login</MenuItem>
          <Link to="/sign-up"><MenuItem leftIcon={<Join />}>Join</MenuItem></Link>
        </Drawer>

        <Dialog
          actions={actions}
          modal={true}
          open={this.state.openLoginForm}
          contentStyle={material_styles.dialogStyle}
        >
          <LoginForm/>
        </Dialog>
      </div>
    );
  }
}

GalleryPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default GalleryPage;
