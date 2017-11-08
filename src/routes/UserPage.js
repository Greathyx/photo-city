/**
 * Created by hyx on 2017/10/31.
 */

import React from 'react';
import styles from './css/UserPage.css';
import SwipeableViews from 'react-swipeable-views';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList} from 'material-ui/GridList';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';

import imgPortrait from '../assets/graphics/portrait.jpg';
import NewPhotoGridList from '../components/PhotoGridList';


const material_styles = {
  slide: {
    paddingTop: 10,
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


class UserPage extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className={"col s12 m12 l12 " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>

        <GridList
          className={styles.gridlist}
          cols={2}
          style={{height: 120, marginTop: 20, marginLeft: 10, marginBottom: 6}}
        >
          <Avatar src={imgPortrait} size={100}/>
          <div className={styles.info_wrapper}>
            <p className={styles.Username} style={{wordBreak: 'break-all', lineHeight: 1}}>Sherley
              Huang</p>
            <div>
              <p className={styles.Email} style={{wordBreak: 'break-all', lineHeight: 1, display: 'inline'}}>
                151250064@smail.nju.edu.cn</p>
              <IconButton tooltip="Edit" touch={true} tooltipPosition="bottom-right">
                <EditIcon/>
              </IconButton>
            </div>
          </div>
        </GridList>

        <div className="col s12 m12 l12">

          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            inkBarStyle={material_styles.inkBarColor}
          >
            <Tab label="My Photos" value={0} buttonStyle={material_styles.tab}/>
            <Tab label="Favourite" value={1} buttonStyle={material_styles.tab}/>
            <Tab label="Following" value={2} buttonStyle={material_styles.tab}/>
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            style={{marginTop: 5}}
          >
            <div>
              <NewPhotoGridList/>
            </div>
            <div style={material_styles.slide}>
              slide n°2
            </div>
            <div style={material_styles.slide}>
              slide n°3
            </div>
          </SwipeableViews>
        </div>

      </div>
    );
  }
}

UserPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default UserPage;
