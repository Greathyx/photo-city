/**
 * Created by hyx on 2017/10/26.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui-next/styles';
import {GridList, GridListTile} from 'material-ui-next/GridList';
// import tileData from './tileData';
import pic1 from '../assets/testPics/1.jpg';
import pic2 from '../assets/testPics/2.jpg';
import pic3 from '../assets/testPics/3.jpg';
import pic4 from '../assets/testPics/4.jpg';
import pic5 from '../assets/testPics/5.jpg';
import pic6 from '../assets/testPics/6.jpg';
import pic7 from '../assets/testPics/7.jpg';
import pic8 from '../assets/testPics/8.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  subheader: {
    width: '100%',
  },
});

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
  },
];

function ImageGridList(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
