/**
 * Created by hyx on 2017/10/24.
 */

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './css/PhotoPage.css';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import GalleryGridList from '../components/ImageGridList';

import pic1 from '../assets/testPics/1.jpg';
import pic2 from '../assets/testPics/2.jpg';
import pic3 from '../assets/testPics/3.jpg';
import pic4 from '../assets/testPics/4.jpg';
import pic5 from '../assets/testPics/5.jpg';
import pic6 from '../assets/testPics/6.jpg';
import pic7 from '../assets/testPics/7.jpg';
import pic8 from '../assets/testPics/8.jpg';

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


const material_styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    paddingTop: 10,
  },
  tab: {
    color: '#000000',
    backgroundColor: '#ffffff',
    fontWeight: 400,
  },
  inkBarColor: {
    backgroundColor: '#00897b',
  }
};


class PhotoPage extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className={"col s12 m12 l12" + " " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>
        <PageHeader subhead="With a camera through all the world's every city in every corner of the photographer."/>

        <div className="col s12 m12 l12">
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            inkBarStyle={material_styles.inkBarColor}
          >
            <Tab label="New" value={0} buttonStyle={material_styles.tab} />
            <Tab label="Discover" value={1} buttonStyle={material_styles.tab} />
            <Tab label="Tab Three" value={2} buttonStyle={material_styles.tab} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            style={{marginTop: 5}}
          >
            <div>
              <GalleryGridList/>
            </div>
            <div style={material_styles.slide}>
              slide n°2
            </div>
            <div style={material_styles.slide}>
              slide n°3
            </div>
          </SwipeableViews>
        </div>

      </div>
    );
  }
}

PhotoPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default PhotoPage;
