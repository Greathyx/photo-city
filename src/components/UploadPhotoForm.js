/**
 * Created by hyx on 2017/11/14.
 */

import React from 'react';
import {connect} from 'dva';
import {message, Upload, Icon} from 'antd';
import styles from './css/UploadPhotoForm.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import Dialog, {DialogActions, DialogContent} from 'material-ui-next/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import UploadIcon from 'material-ui/svg-icons/file/file-upload';


const material_styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 16,
    paddingLeft: 0
  },
  underlineFocusStyle: {
    borderColor: '#00897b',
  },
  floatingLabelFocusStyle: {
    color: '#00897b',
    fontSize: 23
  },
  floatingLabelStyle: {
    color: '#333333',
    fontSize: 23
  },
  labelStyle: {
    color: '#757575',
  },
  flatButtonLabelStyle: {
    color: '#00897b',
  }
};


class UploadPhotoForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      chipData: [],
      tagData: [
        {key: 0, label: 'Animal'},
        {key: 1, label: 'Business'},
        {key: 2, label: 'Cool'},
        {key: 3, label: 'Food'},
        {key: 4, label: 'Friends'},
        {key: 5, label: 'Happiness'},
        {key: 6, label: 'Health'},
        {key: 7, label: 'House'},
        {key: 8, label: 'Love'},
        {key: 9, label: 'Nature'},
        {key: 10, label: 'Pet'},
        {key: 11, label: 'Portrait'},
        {key: 12, label: 'Season'},
        {key: 13, label: 'Sport'},
        {key: 14, label: 'Technology'},
      ],
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  }

  // 预览上传的图片
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      open: true
    });
  };

  // 关闭预览图片
  handleCancelPreview = () => {
    this.setState({open: false});
  };

  // 选择标签
  handleChooseTag(key) {
    this.chipData = this.state.chipData;
    for (let i = 0; i < this.state.tagData.length; i++) {
      if (this.state.tagData[i].key === key) {
        this.chipData.push(this.state.tagData[i]);
      }
    }
    this.setState({chipData: this.chipData});
  }

  // 删除已选标签
  handleRequestDelete = (key) => {
    // if (key === 3) {
    //   alert('Why would you want to delete React?! :)');
    //   return;
    // }
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };


  /**
   *
   * file: 当前操作的文件对象
   *
   * {
   *   uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
   *   name: 'xx.png'   // 文件名
   *   status: 'done',  // 状态有：uploading done error removed
   *   response: '{"imgUrl": "http://127.0.0.1:3000/upload_db5f2a1f91f5e26ac5958611950153fd.jpg"}', // 服务端响应内容
   * }
   *
   */
  handleUploadChange = ({fileList, file}) => {
    this.setState({fileList});
    if (file.status === 'done') {
      console.log(file.response.imgUrl);
    }
  };

  // 上传新动态监听
  handleSubmit = () => {
    if (this.state.fileList.length === 0) {
      message.warning("Please upload at least one photo!");
    }
    else if (this.state.chipData.length === 0){
      message.warning("Please choose at least one tag!");
    }
    else {
      // todo
    }
  };

  // 标签创建器
  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={material_styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {

    const {previewImage, fileList} = this.state;

    const uploadButton = (
      <div>
        <Icon className={styles.icon} type="plus"/>
      </div>
    );

    return (
      <div className="row" style={{paddingTop: 20}}>

        <div className="col s12 m12 l12" style={{marginLeft: 20}}>
          <Upload
            action="http://127.0.0.1:3000/uploadPhotos"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleUploadChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Dialog
            open={this.state.open}
            maxWidth="md"
            fullWidth
          >
            <DialogContent>
              <img className="responsive-img" src={previewImage}/>
            </DialogContent>
            <DialogActions>
              <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleCancelPreview}
                labelStyle={material_styles.flatButtonLabelStyle}
              />
            </DialogActions>
          </Dialog>
        </div>

        <div style={{margin: '0 20px'}}>
          <div className="col s12 m12 l12" style={material_styles.wrapper}>
            {/*<span className={styles.hint}>Tags:</span>*/}
            {this.state.chipData.map(this.renderChip, this)}
          </div>

          <div className="col s12 m12 l12" style={material_styles.wrapper}>
            <span className={styles.hint}>Click to add tags to your photo(s)</span>
            <div className={styles.tagButtons}>
              {this.state.tagData.map((data) => (
                <FlatButton
                  label={data.label}
                  key={data.key}
                  onClick={() => this.handleChooseTag(data.key)}
                  labelStyle={material_styles.labelStyle}
                />
              ))}
            </div>
          </div>

          <TextField
            id="description"
            hintText="Tell us about the stories of your photo(s)"
            floatingLabelText="Description"
            multiLine={true}
            fullWidth={true}
            floatingLabelFixed={true}
            rows={1}
            underlineFocusStyle={material_styles.underlineFocusStyle}
            floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}
            floatingLabelStyle={material_styles.floatingLabelStyle}
            style={{marginTop: 10}}
          />
        </div>

        <div className="col s12 m12 l12" style={{textAlign: 'center', marginTop: 30}}>
          <RaisedButton
            label="submit"
            labelPosition="after"
            icon={<UploadIcon/>}
            backgroundColor="#00897b"
            labelStyle={{color: '#fff'}}
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

UploadPhotoForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

function mapStateToProps({Authentication, Photo}) {
  return {
    Authentication,
    Photo
  };
}

export default connect(mapStateToProps)(UploadPhotoForm);
