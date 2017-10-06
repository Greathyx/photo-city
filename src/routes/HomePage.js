/**
 * Created by hyx on 2017/10/5.
 */
import React from 'react';
import styles from './HomePage.css';

import {Layout} from 'antd';

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
        <Content className={styles.mainContent}>
          <div className={styles.root}>
            <GridList className={styles.gridList} cols={2}>
              <div className={styles.menuPic}/>
              <IconMenu
                iconButtonElement={<IconButton><DehazeIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Home"/>
                <MenuItem primaryText="Gallery"/>
                <MenuItem primaryText="Login"/>
                <MenuItem primaryText="Register"/>
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
