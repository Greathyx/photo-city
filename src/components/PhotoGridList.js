/**
 * Created by hyx on 2017/10/26.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridListTile} from 'material-ui-next/GridList';
import Dialog, {
  DialogActions,
  DialogContent,
} from 'material-ui-next/Dialog';
import PhotoForm from './PhotoForm';
import styles from './css/PhotoGridList.css';
import pic1 from '../assets/smallPics/1.jpg';
import pic2 from '../assets/smallPics/2.jpg';
import pic3 from '../assets/smallPics/3.jpg';
import pic4 from '../assets/smallPics/4.jpg';
import pic5 from '../assets/smallPics/5.jpg';
import pic6 from '../assets/smallPics/6.jpg';
import pic7 from '../assets/smallPics/7.jpg';
import pic8 from '../assets/smallPics/8.jpg';

import pic11 from '../assets/bigPics/1.jpg';
import pic21 from '../assets/bigPics/2.jpg';

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


const tileData = [
  {
    id: 1,
    img: pic1,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 2,
    img: pic2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 3,
    img: pic3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 4,
    img: pic4,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    id: 5,
    img: pic5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 6,
    img: pic6,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    id: 7,
    img: pic7,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    id: 8,
    img: pic8,
    title: 'Image',
    author: 'author',
    cols: 2,
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
  gridList: {
    width: '100%',
    height: 'auto',
  },
  flatButtonLabelStyle: {
    color: '#245168',
  }
};


class NewPhotoGridList extends React.Component {

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

  render() {
    return (
      <div style={material_styles.root}>
        <GridList cellHeight={300} style={material_styles.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <img
                classID={tile.id}
                src={tile.img}
                alt={tile.title}
                onClick={this.handleOpen}
                className={styles.img}
              />
            </GridListTile>
          ))}
        </GridList>

        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          maxWidth="md"
          fullwidth
        >
          <DialogContent>
            <PhotoForm
              img_src={pic21}
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
