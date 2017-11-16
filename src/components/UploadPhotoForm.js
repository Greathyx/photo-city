/**
 * Created by hyx on 2017/11/14.
 */

import React from 'react';
import styles from './css/UploadPhotoForm.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import ImageUploader from 'react-images-upload';
import Hologram from 'hologram-image-upload';
import 'hologram-image-upload/dist/css/Hologram.css';


const material_styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 10,
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
    color: '#00897b',
  }
};

var dropZoneConfig = {
  style : {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    padding: '2.5em 0',
    background: '#fff',
    // border: '4px dashed #9E9E9E',
    color: '#fff'
  }
};

class UploadPhotoForm extends React.Component {

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
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
      ]
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  handleChooseTag(key) {
    this.chipData = this.state.chipData;
    for (let i = 0; i < this.state.tagData.length; i++) {
      if (this.state.tagData[i].key === key) {
        this.chipData.push(this.state.tagData[i]);
      }
    }
    this.setState({chipData: this.chipData});
  }

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
    return (
      <div className="row">
        {/*<ImageUploader*/}
          {/*withIcon={true}*/}
          {/*buttonText='Choose images'*/}
          {/*onChange={this.onDrop}*/}
          {/*imgExtension={['.jpg', '.JPG', '.gif', '.png']}*/}
          {/*maxFileSize={5242880}*/}
          {/*label='Max file size: 5MB, accepted: jpg, JPG, png, gif'*/}
          {/*buttonStyles={{borderRadius: 2, backgroundColor: '#00897b'}}*/}
          {/*style={{margin: '0 auto'}}*/}
        {/*/>*/}

        <Hologram
          dropzoneConfig={dropZoneConfig}
          maxFiles={6}
        />

        <div style={{margin: '0 50px'}}>
          <div className="col s12 m12 l12" style={material_styles.wrapper}>
            <span className={styles.hint}>Tags:</span>
            {this.state.chipData.map(this.renderChip, this)}
          </div>

          <div className="col s12 m12 l12" style={material_styles.wrapper}>
            <span className={styles.hint}>Please choose tags:</span>
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
            hintText="Type in the description of your photo(s) here."
            floatingLabelText="Description:"
            multiLine={true}
            fullWidth={true}
            floatingLabelFixed={true}
            rows={1}
            underlineFocusStyle={material_styles.underlineFocusStyle}
            floatingLabelFocusStyle={material_styles.floatingLabelFocusStyle}
            floatingLabelStyle={material_styles.floatingLabelStyle}
          />
        </div>
      </div>
    );
  }
}

UploadPhotoForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default UploadPhotoForm;
