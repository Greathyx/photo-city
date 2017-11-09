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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatPagination from 'material-ui-flat-pagination';
import NewPhotoGridList from '../components/PhotoGridList';
import TagsGridList from '../components/TagsGridList';
import Classification from '../components/ClassificationPanel';
import NewDynamicsPanel from '../components/NewDynamicsPanel';
import tileData from '../utils/imgLoader';


const material_styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    width: '100%',
    paddingTop: 10,
  },
  tab: {
    color: '#000000',
    backgroundColor: '#ffffff',
    width: '100%',
    fontWeight: 400,
  },
  inkBarColor: {
    backgroundColor: '#00897b',
  },
  currentPageLabelStyle: {
    color: '#00897b'
  },
  otherPageLabelStyle: {
    color: '#9E9E9E'
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
      offset_new: 0,
      offset_discover: 0,
      newPhotoList: tileData.test1_tileData,
      classification_list: [
        {
          head: 'Animal',
          subhead: 'Download diverse photos of animals with various appearances, habitats and emotions.',
          tileData: tileData.classification_animal_tileData
        },
        {
          head: 'Business',
          subhead: 'Download free business photos of real people getting ready for work in real life. No cheesy or stocky business pictures here.',
          tileData: tileData.classification_business_tileData
        },
        {
          head: 'Dog',
          subhead: 'Find different kinds of lovely dogs here and hope that they can heal your heart.',
          tileData: tileData.classification_dog_tileData
        }
      ]
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  // 最新照片面板分页监听
  handleClickPage_New(offset) {
    this.setState({offset_new: offset});
  }

  // 发现照片面板分页监听
  handleClickPage_Discover(offset) {
    this.setState({offset_discover: offset});
    if (offset === 0) {
      this.state.classification_list = [
        {
          head: 'Animal',
          subhead: 'Download diverse photos of animals with various appearances, habitats and emotions.',
          tileData: tileData.classification_animal_tileData
        },
        {
          head: 'Business',
          subhead: 'Download free business photos of real people getting ready for work in real life. No cheesy or stocky business pictures here.',
          tileData: tileData.classification_business_tileData
        },
        {
          head: 'Dog',
          subhead: 'Find different kinds of lovely dogs here and hope that they can heal your heart.',
          tileData: tileData.classification_dog_tileData
        }
      ]
    }
    else if (offset === 1) {
      this.state.classification_list = [
        {
          head: 'Food',
          subhead: 'Get hungry with these beautiful pictures of food. Download our most popular food images featuring coffee and pastries, fast food, vegan food, Thai food, and Mexican food.',
          tileData: tileData.classification_food_tileData
        },
        {
          head: 'Friends',
          subhead: 'Enjoy and record a good time with your friends. As the saying goes, \"A life without a friend is a life without a sun.\"',
          tileData: tileData.classification_friends_tileData
        },
        {
          head: 'Happiness',
          subhead: 'Celebrate happy days full of smiling and joy. Download these popular happy images perfect for birthdays, mother\'s day, valentines day, and anniversary.',
          tileData: tileData.classification_happiness_tileData
        },
      ]
    }
    else if (offset === 2) {
      this.state.classification_list = [
        {
          head: 'Technology',
          subhead: 'Browse these technology images featuring workspaces fill with gadgets, MacBooks, iPhones, and cameras.',
          tileData: tileData.classification_technology_tileData
        },
      ]
    }
    else {
      console.log(offset)
    }
  }

  render() {
    return (
      <div className={"col s12 m12 l12" + " " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>
        <PageHeader
          subhead="With a camera through all the world's every city in every corner of the photographer."
        />

        <div className="col s12 m12 l12">
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            inkBarStyle={material_styles.inkBarColor}
          >
            <Tab label="New" value={0} buttonStyle={material_styles.tab}/>
            <Tab label="Discover" value={1} buttonStyle={material_styles.tab}/>
            <Tab label="Moments" value={2} buttonStyle={material_styles.tab}/>
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            style={{marginTop: 5}}
          >
            <div>
              <NewPhotoGridList
                tileData={tileData.test1_tileData}
                cols={3}
                height={300}
              />
              {/**
               分页
               */}
              <div className={styles.pagination_wrapper}>
                <MuiThemeProvider>
                  <FlatPagination
                    offset={this.state.offset_new}
                    limit={1}
                    total={10}
                    onClick={(e, offset) => this.handleClickPage_New(offset)}
                    style={{marginTop: 50, marginBottom: 30}}
                    currentPageLabelStyle={material_styles.currentPageLabelStyle}
                    otherPageLabelStyle={material_styles.otherPageLabelStyle}
                  />
                </MuiThemeProvider>
              </div>
            </div>

            <div>
              <TagsGridList/>

              {this.state.classification_list.map(classification_item => (
                <Classification
                  head={classification_item.head}
                  subhead={classification_item.subhead}
                  tileData={classification_item.tileData}
                  cols={12}
                  height={200}
                />
              ))}

              {/**
               分页
               */}
              <div className={styles.pagination_wrapper}>
                <MuiThemeProvider>
                  <FlatPagination
                    offset={this.state.offset_discover}
                    limit={1}
                    total={5}
                    onClick={(e, offset) => this.handleClickPage_Discover(offset)}
                    style={{marginTop: 50, marginBottom: 30}}
                    currentPageLabelStyle={material_styles.currentPageLabelStyle}
                    otherPageLabelStyle={material_styles.otherPageLabelStyle}
                  />
                </MuiThemeProvider>
              </div>
            </div>

            <div>
              <NewDynamicsPanel/>
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
