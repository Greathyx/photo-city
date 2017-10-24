/**
 * Created by hyx on 2017/10/24.
 */

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './css/PhotoPage.css';

class PhotoPage extends React.Component {
  render() {
    return (
      <div className={"col s12 m12 l12" + " " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>
        <PageHeader subhead="With a camera through all the world's every city in every corner of the photographer."/>
      </div>
    );
  }
}

export default PhotoPage;
