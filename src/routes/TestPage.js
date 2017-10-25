/**
 * Created by hyx on 2017/10/10.
 */

import React from 'react';
import {connect} from 'dva';
import styles from './css/TestPage.css';
import {Link} from 'dva/router';
import {img} from 'antd';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


const material_styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  tab: {
    color: '#000000',
    backgroundColor: '#ffffff',
    fontWeight: 400,
  },
  inkBarColor: {
    backgroundColor: '#00897b',
  }
};


class GalleryPage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      open: false
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="col s12 m12 l12">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={material_styles.inkBarColor}
        >
          <Tab label="New" value={0} buttonStyle={material_styles.tab} />
          <Tab label="Discover" value={1} buttonStyle={material_styles.tab} />
          <Tab label="Tab Three" value={2} buttonStyle={material_styles.tab} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={material_styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={material_styles.slide}>
            slide n°2
          </div>
          <div style={material_styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>

        <div>
          <RaisedButton
            label="Open Drawer"
            onClick={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
        </div>

      </div>
    );
  }
}

GalleryPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default GalleryPage;
