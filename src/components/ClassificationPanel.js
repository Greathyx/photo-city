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

  state = {
    open: false,
    img_src: ""
  };

  handleOpen = (event) => {
    // console.log(event.target);
    this.setState({
      open: true,
      img_src: event.target.src
    });
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  handleViewMore() {

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

        <GridList cellHeight={200} style={material_styles.gridList} cols={12}>
          {this.props.tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols}
            >
              <img
                src={tile.img}
                alt={tile.title}
                onClick={this.handleOpen}
                className={styles.img}
              />
            </GridListTile>
          ))}
          <GridListTile
            key="view_more"
            cols={3}
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
    )
  }
}

ClassificationPanel.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default ClassificationPanel;
