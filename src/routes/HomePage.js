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


const {Content} = Layout;


class HomePage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <Layout>
        {/*使用document.body.clientHeight可能会导致高度为0，改用document.documentElement.clientHeight*/}
        <Content className={styles.mainContent} style={{height: document.documentElement.clientHeight}}>
          <div className={styles.root}>
            <GridList className={styles.gridList} cols={2}>
              <div className={styles.menuPic}/>
              <IconMenu
                iconButtonElement={<IconButton><DehazeIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <Link to="/homepage"><MenuItem primaryText="Home"/></Link>
                <MenuItem primaryText="Gallery"/>
                <MenuItem primaryText="Login"/>
                <Link to="/sign-up"><MenuItem primaryText="Join"/></Link>
              </IconMenu>
            </GridList>
          </div>
        </Content>
      </Layout>
    );
  }
}

HomePage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default HomePage;
