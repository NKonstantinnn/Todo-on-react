import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.props.onSearched(e.target.value);
  }

  render() {
    return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={ this.onLabelChange } />
    );
  };
};

export default SearchPanel;