/**
 * Created by hyx on 2017/10/24.
 */

import React from 'react';
import styles from './css/PageHeader.css';


class PageHeader extends React.Component {
  render() {
    return (
      <div className={styles.pageHeader}>
        <div className="row">
          <div className="col s12 m12 l12">
            <span className={styles.head}>Photo City</span>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <span className={styles.subhead}>{this.props.subhead ? this.props.subhead : ''}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
