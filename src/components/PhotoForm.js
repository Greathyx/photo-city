/**
 * Created by hyx on 2017/10/9.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {GridList} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Favourite from 'material-ui/svg-icons/action/favorite-border';

import imgPortrait from '../assets/graphics/portrait.jpg';
import styles from './css/PhotoForm.css';


const material_styles = {
  largeIcon: {
    width: 48,
    height: 48,
  },
  large: {
    width: 96,
    height: 96,
    padding: 24,
  }
};

class PhotoForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div className="center-align">
        <div className="row">
          <GridList
            cols={2}
            className={styles.gridlist}
            style={{height: 80, marginLeft: 0, marginBottom: 20, textAlign: 'left'}}
          >
            <Avatar src={imgPortrait} size={80}/>
            <div className={styles.info_wrapper}>
              <p className={styles.Username} style={{wordBreak: 'break-all', lineHeight: 1}}>Sherley Huang</p>
              <p className={styles.Email} style={{wordBreak: 'break-all', lineHeight: 1}}>151250064@smail.nju.edu.cn</p>
            </div>
          </GridList>

          <div style={{textAlign: 'right', float: 'right', marginTop: -100}}>
            <IconButton
              tooltip="Like it"
              touch={true}
              tooltipPosition="bottom-right"
              iconStyle={material_styles.largeIcon}
              style={material_styles.large}
            >
              <Favourite/>
            </IconButton>
          </div>
        </div>

        <img className="responsive-img" src={this.props.img_src}/>
        <div className={styles.tags_wrapper}>
          <p className={"flow-text " + styles.tags}>Tags: {this.props.tags}</p>
        </div>
      </div>
    );
  }
}

PhotoForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default PhotoForm;
