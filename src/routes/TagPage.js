/**
 * Created by hyx on 2017/11/09.
 */

import React from 'react';
import PageHeader from '../components/PageHeader';
import styles from './css/TagPage.css';

class TagPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"col s12 m12 l12" + " " + styles.mainPanel} style={{paddingLeft: '4%', paddingRight: '4%'}}>
        <PageHeader
          head={this.props.params.tag + " pictures"}
          subhead={"Enjoy beautiful "+ this.props.params.tag + " pictures."}
        />
      </div>
    );
  }
}

export default TagPage;
