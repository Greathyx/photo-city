/**
 * Created by hyx on 2017/10/26.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridListTile} from 'material-ui-next/GridList';
import Dialog, {DialogActions, DialogContent} from 'material-ui-next/Dialog';
import PhotoForm from './PhotoForm';
import styles from './css/PhotoGridList.css';


const material_styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: '#fff',
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  flatButtonLabelStyle: {
    color: '#00897b',
  }
};


class NewPhotoGridList extends React.Component {

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
    else if (this.state.windowWidth >= 600 && this.state.windowWidth < 1200) {
      this.setState({grid_cols: 2});
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
    else if (this.state.windowWidth >= 600 && this.state.windowWidth < 1200) {
      this.setState({grid_cols: 2});
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
  handleOpen(bImg) {
    this.setState({
      open: true,
      img_src: bImg
    });
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {

    return (
      <div style={material_styles.root}>
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
                classID={tile.id}
                src={tile.img}
                alt={tile.title}
                onClick={(e, bImg) => this.handleOpen(tile.bImg ? tile.bImg : tile.img)}
                className={styles.img}
              />
            </GridListTile>
          ))}
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
              tags="Landscape, Nature"
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
    );
  }
}

NewPhotoGridList.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default NewPhotoGridList;
