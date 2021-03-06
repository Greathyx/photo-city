/**
 * Created by hyx on 2017/10/26.
 */

import React from 'react';
import {hashHistory} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import styles from './css/TagsGridList.css';
import {GridList, GridTile} from 'material-ui/GridList';
import tileData from '../utils/imgLoader';


const material_styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%', // 解决classification面板下方出现横向滑动条的问题
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridTile: {
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
  },
  gridTitle: {
    textAlign: 'center',
    marginRight: 12,
  }
};

class TagsGridList extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  // 根据标签名字，跳转到分类标签界面
  handleClickTag(tag_name) {
    // todo
    hashHistory.push("/gallery/tag=" + tag_name);
  }

  render() {
    return (
      <div style={material_styles.root}>
        <GridList cellHeight={90} style={material_styles.gridList} cols={2.2}>
          {tileData.tag_tileData.map(tile => (
            <GridTile
              key={tile.img}
              title={tile.title}
              style={material_styles.gridTile}
              titleStyle={material_styles.gridTitle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              className={styles.gridTile}
              onClick={(e, tag_name)=>this.handleClickTag(tile.title)}
            >
              <img
                src={tile.img}
                alt={tile.title}
                className={styles.tag_img}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

TagsGridList.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default TagsGridList;
