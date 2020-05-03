import React, { Component } from 'react';
import Input from './input';

class queryInput extends Component {
  state = { rid: '', day: '' };
  onSearch = ({ rid, day }) => {
    this.setState({ rid, day });
  };
  componentDidUpdate() {
    if (this.state.rid.length > 0) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    return (
      <div className="ui segment query-bar">
        <input type="hidden" name="" value={this.state.rid} />

        <Input onClick={this.onSearch} />
      </div>
    );
  }
}

export default queryInput;
