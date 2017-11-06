/**
 * Created by hyx on 2017/10/26.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import styles from './css/TagsGridList.css';
import {GridList, GridTile} from 'material-ui/GridList';
import animal_tag from '../assets/tagsPics/animal.jpg';
import business_tag from '../assets/tagsPics/business.jpg';
import computer_tag from '../assets/tagsPics/computer.jpg';
import dog_tag from '../assets/tagsPics/dog.jpg';
import food_tag from '../assets/tagsPics/food.jpg';
import friends_tag from '../assets/tagsPics/friends.jpg';
import happiness_tag from '../assets/tagsPics/happiness.jpg';
import health_tag from '../assets/tagsPics/health.jpg';
import house_tag from '../assets/tagsPics/house.jpg';
import love_tag from '../assets/tagsPics/love.jpg';
import nature_tag from '../assets/tagsPics/nature.jpg';
import season_tag from '../assets/tagsPics/season.jpg';
import sport_tag from '../assets/tagsPics/sport.jpg';


const tileData = [
  {
    img: animal_tag,
    title: 'animal'
  },
  {
    img: business_tag,
    title: 'business'
  },
  {
    img: computer_tag,
    title: 'computer'
  },
  {
    img: dog_tag,
    title: 'dog'
  },
  {
    img: food_tag,
    title: 'food'
  },
  {
    img: friends_tag,
    title: 'friends'
  },
  {
    img: happiness_tag,
    title: 'happiness'
  },
  {
    img: health_tag,
    title: 'health'
  },
  {
    img: house_tag,
    title: 'house'
  },
  {
    img: love_tag,
    title: 'love'
  },
  {
    img: nature_tag,
    title: 'nature'
  },
  {
    img: season_tag,
    title: 'season'
  },
  {
    img: sport_tag,
    title: 'sport'
  },
];

const material_styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridTile: {
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
  },
  gridTitle: {
    textAlign: 'center',
    marginRight: 12,
  }
};

class TagsGridList extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div style={material_styles.root}>
        <GridList cellHeight={90} style={material_styles.gridList} cols={2.2}>
          {tileData.map(tile => (
            <GridTile
              key={tile.img}
              title={tile.title}
              style={material_styles.gridTile}
              titleStyle={material_styles.gridTitle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              className={styles.gridTile}
            >
              <img
                src={tile.img}
                alt={tile.title}
                className={styles.tag_img}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

TagsGridList.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default TagsGridList;
