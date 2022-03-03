import React, { Component } from 'react';
import {List} from 'antd-mobile'
import {Link} from 'umi'
export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>class demo</h1>
        <List>
          <List.Item>
            <Link to="/class/component-old">
              old
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/class/component-new">
              new
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/class/lists">
              lists
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/class/dva">
              dva
            </Link>
          </List.Item>
        </List>
      </div>
    )
  }
}