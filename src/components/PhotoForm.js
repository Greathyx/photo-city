/**
 * Created by hyx on 2017/10/9.
 */

import React from 'react';
import { hashHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {GridList} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Favourite from 'material-ui/svg-icons/action/favorite-border';
import FlatButton from 'material-ui/FlatButton';

import imgPortrait from '../assets/graphics/portrait.jpg';
import styles from './css/PhotoForm.css';


const material_styles = {

  largeIcon: {
    width: 36,
    height: 36,
  },
  large: {
    width: 72,
    height: 72,
    padding: 16,
  },
  flatButtonLabelStyle: {
    color: '#595959',
  }

};


class PhotoForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  // 根据标签名字，跳转到分类标签界面
  handleClickTag(tag_name) {
    // todo
    hashHistory.push("/gallery/tag="+tag_name);
  }

  render() {
    return (
      <div className="center-align">
        <div className="row">
          <GridList
            cols={2}
            className={styles.gridlist}
            style={{height: 80, marginLeft: 0, marginBottom: 15, textAlign: 'left'}}
          >
            <img src={imgPortrait} className={"circle responsive-img " + styles.avatar} style={{maxWidth: 80}}/>
            <div className={styles.info_wrapper}>
              <p className={styles.Username} style={{wordBreak: 'break-all', lineHeight: 1}}>Sherley Huang</p>
              <p className={styles.Email} style={{wordBreak: 'break-all', lineHeight: 1}}>151250064@smail.nju.edu.cn</p>
            </div>
          </GridList>

          <div style={{textAlign: 'right', float: 'right', marginTop: -92, marginRight: -15}}>
            <IconButton
              tooltip="Like it"
              touch={true}
              tooltipPosition="bottom-left"
              iconStyle={material_styles.largeIcon}
              style={material_styles.large}
            >
              <Favourite/>
            </IconButton>
          </div>
        </div>

        <img className="responsive-img" src={this.props.img_src}/>
        <div className={styles.tags_wrapper}>
          <span className={"flow-text " + styles.tags}>Tags: </span>
          {this.props.tags.map((tag, index) => (
            <FlatButton
              key={index}
              label={tag}
              primary={true}
              onClick={(e, tag_name)=>this.handleClickTag(tag)}
              labelStyle={material_styles.flatButtonLabelStyle}
            />
          ))}
        </div>
      </div>
    );
  }
}

PhotoForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default PhotoForm;
