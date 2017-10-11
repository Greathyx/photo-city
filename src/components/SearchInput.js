/**
 * Created by hyx on 2017/10/10.
 */

import React from 'react'
import { Input } from 'semantic-ui-react';
import styles from './css/SearchInput.css';

class SearchInput extends React.Component {

  render() {

    return (
      <Input
        icon={{ name: 'search', circular: true, link: true }}
        placeholder='Search...'
        style={{width: 400}}
      />
    );
  }
}


export default SearchInput;
