import React, { Component } from 'react';
import Search from './search'
import Lists from './lists'
import {connect} from 'dva'

 class Dva extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <Search {...this.props}/>
          <Lists {...this.props}/>
      </div>
    )
  }
}
// 函数柯里化的方式
export default connect(({search})=>({
  search
}))(Dva)