/**
 * Created by hyx on 2017/11/05.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import styles from './css/ClassificationPanel.css';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridListTile} from 'material-ui-next/GridList';
import Dialog, {DialogActions, DialogContent} from 'material-ui-next/Dialog';
import PhotoForm from './PhotoForm';

const material_styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: '#fff',
    marginTop: 50
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  flatButtonLabelStyle: {
    color: '#00897b',
  },
  flatButtonLabelViewMoreStyle: {
    color: '#9E9E9E',
    fontSize: 24,
    textDecoration: 'underline'
  }
};

class ClassificationPanel extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      img_src: "",
      initial_cols: props.cols,
      grid_cols: props.cols,
      tags: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
  }

  // 实现gridList响应式布局
  handleResize(e) {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
    if (this.state.windowWidth < 600) {
      this.setState({grid_cols: 1});
    }
    else {
      this.setState({grid_cols: this.state.initial_cols});
    }
  }

  // 根据屏幕宽度初始化grid_cols
  componentWillMount() {
    if (this.state.windowWidth < 600) {
      this.setState({grid_cols: 1});
    }
    else {
      this.setState({grid_cols: this.state.initial_cols});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', ::this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.handleResize)
  }

  // 查看大图方法
  handleOpen(bImg, tags) {
    let tags_list = tags.split(",");
    this.setState({
      open: true,
      img_src: bImg,
      tags: tags_list
    });
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  // 查看更多图片方法
  handleViewMore() {
    // todo
  };

  render() {
    return (
      <div style={material_styles.root}>
        <div className="row" style={{marginLeft: 0}}>
          <div className="col s12 m12 l12">
            <p className={"flow-text " + styles.head}>
              {this.props.head ? this.props.head : ''}
              </p>
          </div>
          <div className="col s6 m6 l6">
            <p className={"flow-text " + styles.subhead}>
              {this.props.subhead ? this.props.subhead : ''}
              </p>
          </div>
        </div>

        <GridList
          cellHeight={this.props.height ? this.props.height : 300}
          style={material_styles.gridList}
          cols={this.state.grid_cols}
        >
          {this.props.tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={this.state.grid_cols === 1 ? 1 : tile.cols || 1}
            >
              <img
                src={tile.img}
                alt={tile.title}
                onClick={(e, bImg, tags) => this.handleOpen(tile.bImg ? tile.bImg : tile.img, "Nature,Cool")}
                className={styles.img}
              />
            </GridListTile>
          ))}
          <GridListTile
            key="view_more"
            cols={this.state.grid_cols === 1 ? 1 : 3}
          >
            <FlatButton
              label="View more >>"
              primary={true}
              onClick={this.handleViewMore}
              labelStyle={material_styles.flatButtonLabelViewMoreStyle}
              style={{width: '100%', height: '100%'}}
            />
          </GridListTile>
        </GridList>

        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          maxWidth="lg"
          fullWidth
        >
          <DialogContent>
            <PhotoForm
              img_src={this.state.img_src}
              tags={this.state.tags}
            />
          </DialogContent>
          <DialogActions>
            <FlatButton
              label="Close"
              primary={true}
              onClick={this.handleRequestClose}
              labelStyle={material_styles.flatButtonLabelStyle}
            />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

ClassificationPanel.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default ClassificationPanel;
