/**
 * Created by hyx on 2017/10/26.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridListTile} from 'material-ui-next/GridList';
import PhotoForm from './PhotoForm';
import styles from './css/PhotoGridList.css';
// import tileData from './tileData';
import pic1 from '../assets/smallPics/1.jpg';
import pic2 from '../assets/smallPics/2.jpg';
import pic3 from '../assets/smallPics/3.jpg';
import pic4 from '../assets/smallPics/4.jpg';
import pic5 from '../assets/smallPics/5.jpg';
import pic6 from '../assets/smallPics/6.jpg';
import pic7 from '../assets/smallPics/7.jpg';
import pic8 from '../assets/smallPics/8.jpg';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     background: theme.palette.background.paper,
//   },
//   gridList: {
//     width: '100%',
//     height: 'auto',
//   },
//   subheader: {
//     width: '100%',
//   },
// });

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
    img: pic1,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: pic2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: pic3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: pic4,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: pic5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: pic6,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: pic7,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
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
  subheader: {
    width: '100%',
  },
  flatButtonLabelStyle: {
    color: '#245168',
  },
  dialogStyle: {
    width: '80%',
    height: 'auto',
    maxWidth: 'none',
    maxHeight: 'none'
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
    this.setState({open: true, img_src: event.target.src});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
        labelStyle={material_styles.flatButtonLabelStyle}
      />
    ];

    return (
      <div className={material_styles.root}>
        <GridList cellHeight={300} className={material_styles.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <img
                src={tile.img}
                alt={tile.title}
                onClick={this.handleOpen}
                className={styles.img}
              />
            </GridListTile>
          ))}
        </GridList>

        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
          contentStyle={material_styles.dialogStyle}
        >
          <PhotoForm
            img_src={this.state.img_src}
            tags="Landscape, Nature"
          />
        </Dialog>
      </div>
    );
  }
}

NewPhotoGridList.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default NewPhotoGridList;
