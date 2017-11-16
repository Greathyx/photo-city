/**
 * Created by hyx on 2017/10/31.
 */

import React from 'react';
import styles from './css/UserPage.css';
import SwipeableViews from 'react-swipeable-views';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatPagination from 'material-ui-flat-pagination';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import UploadIcon from 'material-ui/svg-icons/file/file-upload';
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import Dialog, {DialogTitle, DialogActions, DialogContent} from 'material-ui-next/Dialog';
import Paper from 'material-ui/Paper';
import imgPortrait from '../assets/graphics/portrait.jpg';
import NewPhotoGridList from '../components/PhotoGridList';
import tileData from '../utils/imgLoader';
import UploadPhotoForm from '../components/UploadPhotoForm';
import MyPostsForm from '../components/MyPostsForm';


const material_styles = {
  cardStyle: {
    textAlign: 'center',
    boxShadow: 'none',
    width: '100%'
  },
  cardHeaderStyle: {
    textAlign: 'left'
  },
  tab: {
    color: '#000000',
    backgroundColor: '#ffffff',
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
  },
  raisedButton: {
    margin: 12,
  },
  flatButtonLabelStyle: {
    color: '#00897b',
  }
};


class UserPage extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      // open: false,
      slideIndex: 0,
      offset_myPhoto: 0,
    };
  }

  // // 打开上传图片对话框
  // handleOpen = () => {
  //   this.setState({open: true,});
  // };
  //
  // handleClose = () => {
  //   this.setState({open: false});
  // };

  // 分页监听
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  // 最新照片面板分页监听
  handleClickPage_MyPhoto(offset) {
    this.setState({offset_myPhoto: offset});
  }

  render() {
    return (
      <div className={"col s12 m12 l12 " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>

        <Card style={material_styles.cardStyle}>
          <CardHeader
            title="Sherley Huang"
            subtitle={
              <div>
                <span>151250064@smail.nju.edu.cn</span>
                <IconButton tooltip="Edit" touch={true} tooltipPosition="bottom-right">
                  <EditIcon/>
                </IconButton>
              </div>
            }
            avatar={<Avatar src={imgPortrait} size={80}/>}
            titleStyle={{fontSize: 32}}
            subtitleStyle={{fontSize: 16, marginTop: -16}}
            textStyle={material_styles.cardHeaderStyle}
          />
          {/*<CardActions>*/}
            {/*<RaisedButton*/}
              {/*label="Upload"*/}
              {/*labelPosition="after"*/}
              {/*icon={<UploadIcon/>}*/}
              {/*style={material_styles.raisedButton}*/}
              {/*backgroundColor="#00897b"*/}
              {/*labelStyle={{color: '#fff'}}*/}
              {/*onClick={this.handleOpen}*/}
            {/*/>*/}
          {/*</CardActions>*/}
        </Card>

        <div className="col s12 m12 l12">
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            inkBarStyle={material_styles.inkBarColor}
          >
            <Tab label="My posts" value={0} buttonStyle={material_styles.tab}/>
            <Tab label="Upload" value={1} buttonStyle={material_styles.tab}/>
            <Tab label="Favourite" value={2} buttonStyle={material_styles.tab}/>
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            style={{marginTop: 5}}
          >
            <div>
              <MyPostsForm />
              {/**
               分页
               */}
              <div className={styles.pagination_wrapper}>
                <MuiThemeProvider>
                  <FlatPagination
                    offset={this.state.offset_myPhoto}
                    limit={1}
                    total={10}
                    onClick={(e, offset) => this.handleClickPage_MyPhoto(offset)}
                    style={{marginTop: 50, marginBottom: 30}}
                    currentPageLabelStyle={material_styles.currentPageLabelStyle}
                    otherPageLabelStyle={material_styles.otherPageLabelStyle}
                  />
                </MuiThemeProvider>
              </div>
            </div>

            <Paper
              style={{textAlign:'left', margin: '0 20px', paddingBottom: 20}}
              zDepth={1}
            >
              <UploadPhotoForm/>
            </Paper>

            <div style={{margin: '0 20px'}}>
              <NewPhotoGridList
                tileData={tileData.test1_tileData}
                cols={4}
                height={300}
              />
            </div>
          </SwipeableViews>
        </div>

        {/*<Dialog*/}
          {/*open={this.state.open}*/}
          {/*maxWidth="md"*/}
          {/*fullWidth*/}
        {/*>*/}
          {/*<DialogTitle>Upload your photo(s)</DialogTitle>*/}
          {/*<DialogContent>*/}
            {/*<UploadPhotoForm/>*/}
          {/*</DialogContent>*/}
          {/*<DialogActions>*/}
            {/*<FlatButton*/}
              {/*label="Cancel"*/}
              {/*primary={true}*/}
              {/*onClick={this.handleClose}*/}
              {/*labelStyle={material_styles.flatButtonLabelStyle}*/}
            {/*/>*/}
          {/*</DialogActions>*/}
        {/*</Dialog>*/}
      </div>
    );
  }
}

UserPage.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default UserPage;
