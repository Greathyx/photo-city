/**
 * Created by hyx on 2017/11/16.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import tileData from '../utils/imgLoader';
import PhotoGrid from './PhotoGridList';


const material_styles = {

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: '#fff',
  },
  cardStyle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardMediaStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardTextStyle: {
    marginTop: -18,
    marginBottom: 8,
    marginLeft: 2,
    fontSize: 18
  },
  cardTitleStyle: {
    color: '#757575',
    fontSize: 16,
    float: 'right',
    marginRight: 2
  }

};

class MyPostsForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div style={material_styles.root}>
        <Card style={material_styles.cardStyle}>
          <CardHeader
            title="2017/07/18 06:11"
            // subtitle="151250064@smail.nju.edu.cn"
            titleStyle={{fontSize: 24}}
            // subtitleStyle={{fontSize: 14}}
          />
          <CardText style={material_styles.cardTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardMedia style={material_styles.cardMediaStyle}>
            <PhotoGrid
              tileData={tileData.test2_tileData}
              cols={4}
              height={200}
            />
          </CardMedia>
          {/*<CardTitle*/}
            {/*title="2017/07/18 06:11"*/}
            {/*titleStyle={material_styles.cardTitleStyle}*/}
          {/*/>*/}
        </Card>
      </div>
    )
  }
}

MyPostsForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MyPostsForm;
