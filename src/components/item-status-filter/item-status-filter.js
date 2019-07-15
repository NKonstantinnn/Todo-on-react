import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  render() {
    const { onShowAll, onShowActive, onShowDone } = this.props;
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={ onShowAll }>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={ onShowActive }>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={ onShowDone }>Done</button>
      </div>
    );
  }
}