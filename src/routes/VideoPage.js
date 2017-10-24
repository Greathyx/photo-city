/**
 * Created by hyx on 2017/10/24.
 */
import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './css/VideoPage.css';

class VideoPage extends React.Component {
  render() {
    return (
      <div className={"col s12 m12 l12" + " " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>
        <PageHeader subhead="We are all like speeding high-definition cameras, recording the life, about you and me."/>
      </div>
    );
  }
}

export default VideoPage;
