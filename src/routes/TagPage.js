/**
 * Created by hyx on 2017/11/09.
 */

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './css/TagPage.css';
import PhotoGrid from '../components/PhotoGridList';
import tileData from '../utils/imgLoader';


class TagPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"col s12 m12 l12" + " " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>
        <PageHeader
          head={this.props.params.tag + " pictures"}
          subhead={"Enjoy beautiful " + this.props.params.tag + " pictures."}
        />
        <PhotoGrid
          tileData={tileData.test1_tileData}
          cols={3}
          height={300}
        />
      </div>
    );
  }
}

export default TagPage;
