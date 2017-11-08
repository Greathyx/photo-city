/**
 * Created by hyx on 2017/11/07.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import styles from './css/NewDynamicsPanel.css';
import imgPortrait from '../assets/graphics/portrait.jpg';
import Grid from 'material-ui-next/Grid';
import {GridList, GridListTile} from 'material-ui-next/GridList';
import Dialog, {DialogActions, DialogContent} from 'material-ui-next/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PhotoForm from './PhotoForm';

import pic1 from '../assets/smallPics/1.jpg';
import pic2 from '../assets/smallPics/2.jpg';
import pic3 from '../assets/smallPics/3.jpg';
import pic4 from '../assets/smallPics/4.jpg';
import pic5 from '../assets/smallPics/5.jpg';
import pic6 from '../assets/smallPics/6.jpg';
import pic7 from '../assets/smallPics/7.jpg';
import pic8 from '../assets/smallPics/8.jpg';
import pic9 from '../assets/smallPics/9.JPG';

import bPic1 from '../assets/bigPics/1.jpg';
import bPic2 from '../assets/bigPics/2.jpg';
import bPic3 from '../assets/bigPics/3.jpg';
import bPic4 from '../assets/bigPics/4.jpg';
import bPic5 from '../assets/bigPics/5.jpg';
import bPic6 from '../assets/bigPics/6.jpg';
import bPic7 from '../assets/bigPics/7.jpg';
import bPic8 from '../assets/bigPics/8.jpg';
import bPic9 from '../assets/bigPics/9.JPG';


const tileData = [
  {
    id: 1,
    img: pic1,
    bImg: bPic1,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 2,
    img: pic2,
    bImg: bPic2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 3,
    img: pic3,
    bImg: bPic3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 4,
    img: pic4,
    bImg: bPic4,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 5,
    img: pic5,
    bImg: bPic5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 6,
    img: pic6,
    bImg: bPic6,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 7,
    img: pic7,
    bImg: bPic7,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 8,
    img: pic8,
    bImg: bPic8,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 9,
    img: pic9,
    bImg: bPic9,
    title: 'Image',
    author: 'author',
    cols: 1,
  }
];

const material_styles = {

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: '#fff',
  },
  gridStyle: {
    width: '100%',
    marginLeft: 0,
  },
  flatButtonLabelStyle: {
    color: '#00897b',
  }

};

class NewDynamicsPanel extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  state = {
    open: false,
    img_src: ""
  };

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
        <Grid container spacing={24} style={material_styles.gridStyle}>
          <Grid item xs={3} sm={2} md={1}>
            <img src={imgPortrait} className="circle responsive-img" style={{maxWidth: 80}}/>
          </Grid>
          <Grid item xs={9} sm={10} md={11}>
            <GridList cellHeight={200} style={material_styles.gridList} cols={4}>
              {tileData.map(tile => (
                <GridListTile
                  key={tile.img}
                  cols={tile.cols || 1}
                >
                  <img
                    classID={tile.id}
                    src={tile.img}
                    alt={tile.title}
                    onClick={(e, bImg) => this.handleOpen(tile.bImg)}
                    className={styles.img}
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>

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

NewDynamicsPanel.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default NewDynamicsPanel;
