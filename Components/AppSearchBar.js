import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import Styles from './styles/Styles';
import Header from './Header';
import Accordian from './Accordian';


export default class AppSearchBar extends Component {
Component
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}