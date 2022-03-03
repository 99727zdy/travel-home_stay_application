import React, { Component } from 'react';
import {SearchBar} from 'antd-mobile'
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value:""
    };
  }
  handleChange=(value)=>{
    this.setState({
      value:value
    })
  }

  handleSubmit=(value)=>{
    alert()
  }

  render() {
    return (
      <div>
        <SearchBar 
        autoFocus
        value={this.state.value}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}