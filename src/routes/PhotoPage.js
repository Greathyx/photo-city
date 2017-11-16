/**
 * Created by hyx on 2017/10/24.
 */

import React from 'react';
import {connect} from 'dva';
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
import NewDynamicsPanel from '../components/NewDynamicsForm';
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
          head: 'Cool',
          subhead: 'Find cool photos that help make an impact. These various cool images are simply fun, amazing, and unique. Many options of cool pictures for desktop and website background graphics available. Download any you like and use for free commercially or otherwise.',
          tileData: tileData.classification_cool_tileData
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
          tileData: tileData.classification_animal_tileData,
        },
        {
          head: 'Business',
          subhead: 'Download free business photos of real people getting ready for work in real life. No cheesy or stocky business pictures here.',
          tileData: tileData.classification_business_tileData
        },
        {
          head: 'Cool',
          subhead: 'Find cool photos that help make an impact. These various cool images are simply fun, amazing, and unique. Many options of cool pictures for desktop and website background graphics available. Download any you like and use for free commercially or otherwise.',
          tileData: tileData.classification_cool_tileData
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
          head: 'Health',
          subhead: 'Download these health photos, featuring dietary products, healthy food, and people exercising, lifting weights and stretching.',
          tileData: tileData.classification_health_tileData
        },
        {
          head: 'House',
          subhead: 'Browse these house images featuring different styles of decorations, environment and neighbourhood.',
          tileData: tileData.classification_house_tileData
        },
        {
          head: 'love',
          subhead: 'Download these free love images featuring heart objects and shapes, people kissing, holding hands and posing in wedding dresses and suits.',
          tileData: tileData.classification_love_tileData
        },
      ]
    }
    else if (offset === 3) {
      this.state.classification_list = [
        {
          head: 'Nature',
          subhead: 'Get outside, get into nature and explore with these fantastic beaches, forest, mountain and wildlife images. Find your ideal nature pictures and download them for free!',
          tileData: tileData.classification_nature_tileData
        },
        {
          head: 'Pet',
          subhead: 'Find different kinds of lovely pets here and hope that they can heal your heart.',
          tileData: tileData.classification_pet_tileData
        },
        {
          head: 'Portrait',
          subhead: 'Find photos of all types of people here and hope you can make new friends.',
          tileData: tileData.classification_portrait_tileData
        }
      ]
    }
    else {
      this.state.classification_list = [
        {
          head: 'Season',
          subhead: 'Enjoy beautiful photos with fantastic four seasons in a year.',
          tileData: tileData.classification_season_tileData
        },
        {
          head: 'Sport',
          subhead: 'Download these sport pictures featuring basketball, volleyball, swimming and so on.',
          tileData: tileData.classification_sport_tileData
        },
        {
          head: 'Technology',
          subhead: 'Browse these technology images featuring workspaces fill with gadgets, MacBooks, iPhones, and cameras.',
          tileData: tileData.classification_technology_tileData
        },
      ]
    }
  }

  // 打开登陆面板监听
  handleOpenLoginForm = () => {
    this.props.dispatch({
      type: 'authentication/updateShowLoginForm',
      payload: {showLoginForm: true}
    });
  };

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
                  tag={classification_item.head}
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
              {
                this.props.authentication.hasLoggedIn ?
                  <NewDynamicsPanel/>
                  :
                  <div className="col s12 m12 l12" style={{textAlign: 'center'}}>
                    <p className={styles.p}>You haven't logged in yet, please login first.</p>
                    <span className={styles.span}>Click </span>
                    <a className={styles.link} onClick={this.handleOpenLoginForm}>here</a>
                    <span className={styles.span}> to login.</span>
                  </div>
              }
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

function mapStateToProps({authentication}) {
  return {
    authentication,
  };
}

export default connect(mapStateToProps)(PhotoPage);
