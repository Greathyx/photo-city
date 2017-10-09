import React from 'react';
import { connect } from 'dva';
import styles from './css/IndexPage.css';
import imgLogo from '../assets/graphics/logo.png';
import {Image} from 'semantic-ui-react';


const styles2 = {
  image:{
    width: 175,
    height: 93
  }
}

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>hello world!</h1>
      <image src={imgLogo} style={styles2.image}/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
